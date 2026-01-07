import ChhotuPatel from "../assets/Ckumar.png";

export default function About() {
  return (
    <section
      id="AboutMe"
      className="py-20 px-30 text-center bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white "
    >
      <h2 className="text-3xl mb-6">About Me</h2>
      <div className="grid grid-cols-6">
        <div className="col-span-2 relative w-84 h-84 flex items-center justify-center ">
          {/* Thin rotating stroke */}
          <div className="rotating-line absolute inset-0 rounded-full"></div>

          {/* Profile Image */}
          <img
            src={ChhotuPatel}
            alt="Chhotu Patel"
            className="w-80 h-80 rounded-full object-cover z-10 border-2 hover:w-82 hover:h-82 transition-all duration-300"
          />
        </div>

        <div className="col-span-4">
          <p className="text-justify text-2xl pt-10">
            I`m passionate for web development with a strong command of
            development technologies, programming languages, data structures,
            and algorithms. I am currently pursuing a Bachelor of Computer
            Applications and have experience working on a variety of web
            development projects. I am also proficient in desktop application
            development using Java, AWT, and Spring. I am a team player and have
            a strong work ethic. I am always looking for new challenges and
            opportunities to learn and grow. I am confident that I would be a
            valuable asset to your team. thank you for visiting my portfolio.
          </p>
        </div>
      </div>
      <div className="flex justify-center py-20">
        {/* 2019 */}
        <div className="w-800px relative">
          <div className="h-3 w-200 max-sm:w-125 bg-[#162950] mt-1 "></div>
          <ul className=" w-200 max-sm:w-125 flex justify-between absolute top-0 ">
            <li className="w-3 h-5 bg-white relative max-sm:rotate-90 max-sm:w-5">
              <span className=" absolute -mt-6 -ml-2 font-medium  max-sm:ml-6 max-sm:-mt-1">
                2019
              </span>
              <div className="w-62.5 mt-5 -ml-31.25  text-[#162950] text-justify font-medium max-sm:ml-10">
                I`ve pass 10th standard with Science, Social Science, Hindi,
                English, Math &amp; Sanskrit with 66.4% from +2 High School
                Sirari,Sheikhpura. [
                <span className="text-white">BSEB, Patna</span>]
              </div>
            </li>
            <li className="w-3 h-5 bg-white max-sm:rotate-90 max-sm:w-5">
              <span className=" absolute -mt-6 -ml-2 font-medium max-sm:ml-6 max-sm:-mt-1">
                2021
              </span>
              <div className="w-62.5 mt-5 -ml-31.25  text-[#162950] text-justify font-medium max-sm:ml-10">
                I`ve pass 12th standard with Physics, Chemistry, Math, English,
                Hindi with 56.7% from Ramadhin College,Sheikhpura. [
                <span className="text-white">BSEB, Patna</span>]
              </div>
            </li>
            <li className="w-3 h-5 bg-white max-sm:rotate-90 max-sm:w-5">
              <span className=" absolute -mt-6 -ml-2 font-medium max-sm:ml-6 max-sm:-mt-1">
                2022
              </span>
              <div className="w-62.5 mt-5 -ml-31.25  text-[#162950] text-justify font-medium max-sm:ml-10">
                I`ve pass BCA (Bachelor of Computer Applications) with
                Fundamental subjects of Computer Science with 81.2% from
                Ramadhin College ,Sheikhpura. [
                <span className="text-white">MU, Munger</span>]
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
