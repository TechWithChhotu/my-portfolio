import { useEffect } from "react";
import PageRenderer from "./PageRenderer";
import { useState } from "react";
import API from "../services/API";
import axios from "axios";

// <PageRenderer />;

export default function AllProjects() {
  const [projects, setProjects] = useState(null);
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const getProject = async () => {
      const res = await axios.get(`${API_URL}/api/project`);
      // ("https://my-portfolio-j3j9.onrender.com/api/projects");

      if (res.data) {
        setProjects(res.data.projects);
      }
    };
    getProject();
  }, []);

  return (
    <section id="Projects" className="py-20 px-6 bg-[#0f1624]">
      <h2 className="text-3xl text-center mb-10 text-white">
        <span className="relative inline-block pb-2">
          <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 bg-[length:100%_2px] bg-no-repeat bg-bottom">
            Projects
          </span>
        </span>
      </h2>

      <div className="grid grid-cols-2 text-white gap-10 p-10">
        {projects?.map((p, i) => (
          <div
            key={i}
            className="p-[2px] rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"
          >
            <div className="p-6 rounded-2xl bg-black shadow-lg">
              <h3 className="text-xl font-semibold text-white">{p.title}</h3>

              <div className="mt-4 h-[400px] overflow-scroll no-scrollbar rounded-lg border border-white/20">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full rounded-lg"
                />
              </div>

              {/* <p className="text-sm mt-3 text-gray-300">{p.desc}</p> */}

              <div className="flex justify-center">
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-4 bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded transition"
                >
                  Look it up
                </a>
              </div>
            </div>
          </div>

          // <div key={i}>
          //   <img src={p.image} alt={p.title} />
          //   <h3>{p.title}</h3>
          //   <p>{p.desc}</p>
          // </div>
        ))}
      </div>
      {/* <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <div key={i} className="bg-slate-800 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <PageRenderer link={p.link} />
            <p className="text-sm mt-2 text-gray-300">{p.desc}</p>
            <button className="mt-4 bg-cyan-500 px-4 py-2 rounded">
              Look it up
            </button>
          </div>
        ))}
      </div> */}
    </section>
  );
}
