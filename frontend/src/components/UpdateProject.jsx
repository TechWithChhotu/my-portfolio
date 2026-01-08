import React, { useEffect, useState } from "react";
import axios from "axios";
import UpdateProjectCard from "./ProjectCard";
const UpdateProject = () => {
  const [projects, setProjects] = useState(null);
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const getProject = async () => {
      const res = await axios.get(`${API_URL}/api/project`);
      // ("https://my-portfolio-j3j9.onrender.com/api/projects");

      if (res.data) {
        console.log(res.data.projects);

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

      <div className=" text-white flex justify-around">
        <div className="grid grid-cols-2 text-white gap-40 p-10">
          {projects?.map((p, i) => (
            <div key={i} className="p-6 w-120">
              <div className="flex justify-between items-center w-120">
                <UpdateProjectCard project={p} />
              </div>
            </div>

            // <div key={i}>
            //   <img src={p.image} alt={p.title} />
            //   <h3>{p.title}</h3>
            //   <p>{p.desc}</p>
            // </div>
          ))}
        </div>
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
};

export default UpdateProject;
