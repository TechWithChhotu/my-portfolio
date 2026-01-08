import { FaDownload } from "react-icons/fa";
import ChhotuPatel from "../assets/ChhotuPatel.jpg";
export default function Hero() {
  return (
    <section
      className="min-h-screen flex flex-col justify-center items-center
      bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-center text-white"
    >
      <div className="h-68 w-68 flex items-center justify-center ">
        <img
          src={ChhotuPatel}
          className="w-60 h-60 rounded-full border-2 border-white hover:h-64 hover:w-64 transition-all duration-300"
          alt="Chhotu Patel"
        />
      </div>

      <h1 className="text-4xl font-bold">Chhotu Patel</h1>
      <p className="mt-2 text-lg">
        Web App Development | Desktop App | Mobile App
      </p>

      <div className="mt-6 flex gap-4">
        <a href="#contact" className="bg-green-500 px-6 py-2 rounded">
          Contact Me
        </a>
        <a
          href="/cv.pdf"
          download
          className="bg-green-500 px-6 py-2 rounded flex items-center gap-2"
        >
          <FaDownload /> Download CV
        </a>
      </div>
    </section>
  );
}
