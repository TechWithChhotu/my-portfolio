import { FaGithub } from "react-icons/fa";

export default function Header() {
  return (
    <header
      className="
        fixed top-0 left-0 w-full z-50
        backdrop-blur-xl
        bg-[#0f1624]
        border-b border-white/20
        shadow-lg shadow-black/20
      "
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-9">
        <div className="flex h-16 items-center justify-between text-white">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 text-lg font-semibold">
            <span className="text-3xl items-center justify-center">◎</span>
            Portfolio
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-10 text-[17px] font-medium">
            <li>
              <a
                href="#Projects"
                className="hover:text-cyan-300 transition-colors"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#Skills"
                className="hover:text-cyan-300 transition-colors"
              >
                Technologies
              </a>
            </li>
            <li>
              <a
                href="#AboutMe"
                className="hover:text-cyan-300 transition-colors"
              >
                About me
              </a>
            </li>
          </ul>

          {/* Right Icons */}
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/TechWithChhotu?tab=repositories"
              title="Gitthub"
              className="hover:scale-110 transition-transform text-3xl"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
