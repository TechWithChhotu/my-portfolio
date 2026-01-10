import { useEffect } from "react";
import PageRenderer from "./PageRenderer";
import { useState } from "react";
import API from "../services/API";
import axios from "axios";

// <PageRenderer />;

export default function Projects() {
  const API_URL = import.meta.env.VITE_API_URL;
  console.log(API_URL);

  const [projects, setProjects] = useState(null);
  // useEffect(() => {
  //   const getProject = async () => {
  //     const res = await axios.get(`${API_URL}/api/project/top`);
  //     // ("https://my-portfolio-j3j9.onrender.com/api/projects");

  //     if (res.data) {
  //       console.log(res.data.projects);

  //       setProjects(res.data.projects);
  //     }
  //   };
  //   getProject();
  // }, []);
  useEffect(() => {
    const getProject = async () => {
      const params = new URLSearchParams(window.location.search);
      const u = params.get("u");
      const p = params.get("p");

      let url = `${API_URL}/api/project/top`;

      if (u && p) {
        url += `?u=${encodeURIComponent(u)}&p=${encodeURIComponent(p)}`;
      }

      const res = await axios.get(url, {
        withCredentials: true,
      });

      console.log(res.data);
      setProjects(res.data.projects);
    };

    getProject();
  }, []);

  return (
    <section id="Projects" className="py-16 sm:py-20 bg-[#0f1624]">
      <h2 className="text-2xl sm:text-3xl text-center mb-8 sm:mb-10 text-white">
        <span className="relative inline-block pb-2">
          <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 bg-[length:100%_2px] bg-no-repeat bg-bottom">
            Projects
          </span>
        </span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 px-3 sm:px-6 lg:px-10">
        {projects?.map((p, i) => (
          <div
            key={i}
            className="p-[2px] rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"
          >
            <div className="p-4 sm:p-6 rounded-2xl bg-black shadow-lg">
              <h3 className="text-lg sm:text-xl font-semibold text-white">
                {p.title}
              </h3>

              <div className="mt-4 max-h-[220px] sm:max-h-[300px] lg:max-h-[380px] overflow-hidden rounded-lg border border-white/20">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              <div className="flex justify-center">
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-4 bg-cyan-500 hover:bg-cyan-600 px-6 py-2 text-sm sm:text-base rounded transition"
                >
                  Look it up
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <a
          href="/projects"
          className="inline-block text-white rounded-2xl px-8 sm:px-10 py-3 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"
        >
          See more projects
        </a>
      </div>
    </section>
  );
}
