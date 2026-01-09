import { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import axios from "axios";

export default function Header() {
  const [isOwner, setIsOwner] = useState(false);
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const checkOwner = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/auth/status`, {
          withCredentials: true,
        });

        setIsOwner(res.data.isOwner);
      } catch {
        setIsOwner(false);
      }
    };

    checkOwner();
  }, []);
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
          <a href="/" className="flex items-center gap-2 text-lg font-semibold">
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
                Skills
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

            {isOwner && (
              <li>
                <a
                  href="/update-project"
                  className="hover:text-cyan-300 transition-colors"
                >
                  update
                </a>
              </li>
            )}
            {isOwner && (
              <li>
                <a
                  href="/add-project"
                  className="hover:text-cyan-300 transition-colors"
                >
                  Add-Project
                </a>
              </li>
            )}
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
