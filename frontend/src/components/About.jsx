import ChhotuPatel from "../assets/Ckumar.png";

export default function About() {
  return (
    <section
      id="AboutMe"
      className="py-20 px-10  sm:px-10 md:px-20 lg:px-30 text-center bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white"
    >
      <h2 className="text-3xl mb-6">About Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-6 gap-2 lg:gap-8">
        <div className="col-span-4 md:col-span-2 mx-auto md:mx-0 w-32 h-32 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-84 lg:h-84 relative flex items-center justify-center">
          {/* Thin rotating stroke */}
          <div className="rotating-line absolute inset-0 rounded-full"></div>

          {/* Profile Image */}
          <img
            src={ChhotuPatel}
            alt="Chhotu Patel"
            className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-80 lg:h-80 rounded-full object-cover z-10 border-2 transition-all duration-300"
          />
        </div>

        <div className="col-span-4">
          {/* text-justify text-base sm:text-lg lg:text-xl */}
          <p className="text-base lg:text-2xl text-justify pt-10  sm:text-lg  ">
            I`m passionate for web development with a strong command of
            development technologies, programming languages, data structures,
            and algorithms. I am currently pursuing a Master of Computer
            Applications and have experience working on a variety of web
            development projects. I am also proficient in desktop application
            development using Java, AWT, and Spring. I am a team player and have
            a strong work ethic. I am always looking for new challenges and
            opportunities to learn and grow. I am confident that I would be a
            valuable asset to your team. thank you for visiting my portfolio.
          </p>
        </div>
      </div>

      <div className="mt-10 space-y-10 md:space-y-0 md:flex md:justify-between relative ">
        {/* Line */}
        <div className="hidden md:block absolute top-3 left-0 right-0 h-1 bg-[#162950]" />

        {/* Item */}
        {[
          {
            year: "2019",
            text: "I passed 10th standard with Science, Math & languages with 66.4% from +2 High School Sirari (BSEB, Patna).",
          },
          {
            year: "2021",
            text: "I passed 12th with Physics, Chemistry & Math with 56.7% from Ramadhin College (BSEB, Patna).",
          },
          {
            year: "2022",
            text: "I completed BCA with Computer Science fundamentals scoring 81.2% from Ramadhin College (MU, Munger).",
          },
        ].map((item, i) => (
          <div key={i} className="relative md:w-1/3 text-center md:text-left">
            <div className="bg-[#162950] px-2 rounded-full mx-auto md:mx-0 md:absolute md:top-0 md:left-1/2 md:-translate-x-1/2">
              {item.year}
            </div>

            <p className="mt-8 text-sm sm:text-base text-white">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
// {/* Thin rotating stroke */}
//           <div className="rotating-line absolute inset-0 rounded-full"></div>
