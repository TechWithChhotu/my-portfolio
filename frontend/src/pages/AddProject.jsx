import { useState } from "react";
import { createProject } from "../services/project.service";

export default function AddProject() {
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    link: "",
    isTop: false,
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      setLoading(true);
      await createProject(formData);

      setMessage("✅ Project added successfully");

      // reset form
      setFormData({
        title: "",
        desc: "",
        link: "",
        isTop: false,
      });
    } catch (err) {
      console.error(err);
      setMessage("❌ Failed to add project");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-slate-900 text-white flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-slate-800 p-6 rounded-lg border border-white/10"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Add New Project
        </h2>

        {/* Title */}
        <div className="mb-4">
          <label className="block text-sm mb-1">Project Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 rounded bg-slate-700 outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="block text-sm mb-1">Description</label>
          <textarea
            name="desc"
            value={formData.desc}
            onChange={handleChange}
            rows="3"
            className="w-full px-3 py-2 rounded bg-slate-700 outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>

        {/* Link */}
        <div className="mb-4">
          <label className="block text-sm mb-1">Project Link</label>
          <input
            type="url"
            name="link"
            value={formData.link}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 rounded bg-slate-700 outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>

        {/* isTop */}
        <div className="flex items-center gap-3 mb-6">
          <input
            type="checkbox"
            name="isTop"
            checked={formData.isTop}
            onChange={handleChange}
            className="w-4 h-4"
          />
          <span className="text-sm">Mark as Top Project</span>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 rounded bg-cyan-500 text-black font-medium hover:bg-cyan-400 transition"
        >
          {loading ? "Adding..." : "Add Project"}
        </button>

        {/* Message */}
        {message && <p className="mt-4 text-center text-sm">{message}</p>}
      </form>
    </section>
  );
}
