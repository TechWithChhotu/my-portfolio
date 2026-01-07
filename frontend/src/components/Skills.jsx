const skillsLeft = [
  { name: "MongoDB", level: 80 },
  { name: "React", level: 85 },
  { name: "Express", level: 75 },
  { name: "C#", level: 50 },
  { name: "React Native", level: 70 },
];

const skillsRight = [
  { name: "C/C++", level: 95 },
  { name: "Java / DSA", level: 70 },
  { name: "HTML/CSS", level: 80 },
  { name: "MySQL (Oracle)", level: 75 },
  { name: "JavaScript", level: 90 },
];

export default function Skills() {
  return (
    <section id="Skills" className="py-20 px-6 bg-slate-800 text-white">
      <h2 className="text-3xl text-center mb-10 text-white">
        <span className="relative inline-block pb-2">
          <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 bg-[length:100%_2px] bg-no-repeat bg-bottom">
            Skills
          </span>
        </span>
      </h2>

      <div className="flex justify-around max-sm:flex-col max-sm:items-center gap-10">
        {/* LEFT SKILLS */}
        <div className="relative group w-125 max-sm:w-full">
          <ul className="border border-white/20 rounded-lg p-4 space-y-4 relative z-10">
            {skillsLeft.map((skill, i) => (
              <li key={i} className="text-sm font-medium">
                {skill.name}

                <div className="w-full h-3 mt-1 bg-[#162950] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 transition-all duration-700"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
          {/* Hover background */}
          <div className="w-0 max-sm:h-60 absolute  top-0 rounded-lg opacity-20 group-hover:w-full duration-500 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 h-69.5"></div>
        </div>

        {/* RIGHT SKILLS */}
        <div className="relative group w-125 max-sm:w-full">
          <ul className="border border-white/20 rounded-lg p-4 space-y-4 relative z-10">
            {skillsRight.map((skill, i) => (
              <li key={i} className="text-sm font-medium">
                {skill.name}

                <div className="w-full h-3 mt-1 bg-[#162950] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 transition-all duration-700"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
          {/* Hover background */}
          {/* <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-20 transition duration-500 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500" /> */}
          <div className="w-0 max-sm:h-60 absolute right-0  top-0  opacity-20 group-hover:w-full duration-500 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 h-69.5 rounded-lg"></div>
        </div>
      </div>
    </section>
  );
}

{
  /* <div class="w-0 max-sm:h-60 absolute  top-0 rounded opacity-20 group-hover:w-full duration-500 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 h-75"></div>; */
}
