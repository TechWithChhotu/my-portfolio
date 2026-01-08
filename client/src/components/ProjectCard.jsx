import { toggleProjectTop } from "../services/project.service";
import { useState } from "react";

// export function ProjectCard({ project }) {
//   const [isTop, setIsTop] = useState(project.isTop);
//   const [loading, setLoading] = useState(false);

//   const handleToggle = async () => {
//     try {
//       setLoading(true);
//       const res = await toggleProjectTop(project._id);
//       setIsTop(res.data.project.isTop);
//     } catch (err) {
//       console.error(err);
//       alert("Failed to update");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <button
//       onClick={handleToggle}
//       disabled={loading}
//       className={`mt-3 px-4 py-1 rounded text-sm font-medium
//           ${isTop ? "bg-green-500 text-black" : "bg-gray-600 text-white"}`}
//     >
//       {isTop ? "Top Project ✓" : "Mark as Top"}
//     </button>
//   );
// }
import { recaptureProjectScreenshot } from "../services/project.service";

export default function UpdateProjectCard({ project, onImageUpdate }) {
  const [isTop, setIsTop] = useState(project.isTop);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const handleToggle = async () => {
    try {
      setLoading(true);
      const res = await toggleProjectTop(project._id);
      setIsTop(res.data.project.isTop);
    } catch (err) {
      console.error(err);
      alert("Failed to update isTop");
    } finally {
      setLoading(false);
    }
  };

  // 🔥 hit backend re-capture API
  const handleRecapture = async () => {
    try {
      setRefreshing(true);
      const res = await recaptureProjectScreenshot(project._id);

      // optional: update image in parent
      if (onImageUpdate && res.data.image) {
        onImageUpdate(project._id, res.data.image);
      }
    } catch (err) {
      console.error(err);
      alert("Failed to recapture screenshot");
    } finally {
      setRefreshing(false);
    }
  };

  return (
    <div className="border border-white/10 rounded-lg bg-slate-800 p-4">
      <h3 className="text-white font-semibold">{project.title}</h3>

      <div className="mt-4 h-80 w-120 overflow-scroll no-scrollbar rounded-lg border border-white/20">
        <img
          src={project.image}
          alt={project.title}
          className="w-full rounded-lg"
        />
      </div>

      <div className="flex flex-wrap gap-3 py-4 justify-between px-10">
        {/* Toggle isTop */}
        <button
          onClick={handleToggle}
          disabled={loading}
          className={`px-4 py-1 rounded text-sm font-medium
            ${isTop ? "bg-green-500 text-black" : "bg-gray-600 text-white"}`}
        >
          {isTop ? "Top Project ✓" : "Mark as Top"}
        </button>

        {/* Look it up */}
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="px-4 py-1 rounded text-sm font-medium
                     bg-cyan-500 text-black"
        >
          Look it up
        </a>
        {/* Re-capture screenshot */}
        <button
          onClick={handleRecapture}
          disabled={refreshing}
          className="px-4 py-1 rounded text-sm font-medium
                     bg-blue-500 text-white"
        >
          {refreshing ? "Refreshing..." : "Re-capture"}
        </button>
      </div>
    </div>
  );
}
