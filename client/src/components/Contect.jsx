import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-slate-800">
      <div className=" flex justify-center  items-center h-137.5 max-sm:h-225 rounded ">
        <div className="  rounded-xl overflow-hidden bg-[#0F1624] ">
          <h2 className="text-3xl text-center mb-10 text-white">
            <span className="relative inline-block pb-2">
              <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 bg-[length:100%_2px] bg-no-repeat bg-bottom">
                Contact Me
              </span>
            </span>
          </h2>
          <div className="w-250 max-sm:flex-col flex gap-12  justify-center items-center">
            <form className="max-sm:h-112.5 max-sm:px-5 max-sm:pt-4  w-87.5  p-10  rounded-l-lg">
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-100 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  autoCapitalize="new-name"
                  required=""
                  onChange={() => {
                    console.log("x");
                  }}
                />

                <label
                  htmlFor="name"
                  className="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-left peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Name
                </label>
              </div>

              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="number"
                  name="Phone"
                  id="Phone"
                  className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-100 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  autoComplete="new-Phone"
                  required=""
                  onChange={() => {
                    console.log("x");
                  }}
                />

                <label
                  htmlFor="Phone"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-left peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Phone number
                </label>
              </div>

              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="new-email"
                  className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-100 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required=""
                  onChange={() => {
                    console.log("x");
                  }}
                />
                <label
                  htmlFor="email"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-left peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email address
                </label>
              </div>

              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="Subject"
                  id="Subject"
                  className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-100 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  autoComplete="new-Subject"
                  required=""
                  onChange={() => {
                    console.log("x");
                  }}
                />

                <label
                  htmlFor="email"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-left peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Subject
                </label>
              </div>

              <div className="relative z-0 w-full mb-6 group">
                <textarea
                  name="Message"
                  id="Message"
                  className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-100 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  autoComplete="new-Message"
                  required=""
                ></textarea>
                <label
                  htmlFor="Message"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-left peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Message
                </label>
              </div>

              <div className="flex flex-col items-center justify-center bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-2xl">
                <button className="text-white bg-gradient-cyan-purple-pink px-5 py-2 rounded-md Gradient-btn">
                  Submit
                </button>
              </div>
            </form>

            <div>
              <h2 className="text-center  FontSatisfy text-3xl max-sm:text-2xl text-white">
                Chhotu Patel
              </h2>

              <ul className="grid gap-y-3 mt-5 text-white">
                <li>
                  <span className="font-semibold text-lg max-sm:text-base ">
                    Address
                  </span>
                  <br />
                  <span className="pl-10 max-sm:px-0 text-gray-500">
                    Sheikhpura, Bihar,India
                  </span>
                </li>
                <li>
                  <span className="font-semibold text-lg max-sm:text-base">
                    Phone
                  </span>
                  <br />
                  <span className="pl-10 max-sm:px-0 text-gray-500">
                    +91 8920823219
                  </span>
                </li>
                <li>
                  <span className="font-semibold text-lg">Email</span>
                  <br />
                  <span className="pl-10 max-sm:px-0 max-sm:text-sm text-gray-500">
                    chhotustudymail@gmail.com
                  </span>
                </li>
              </ul>

              <div className="flex gap-5 mt-10 justify-center text-white">
                <a
                  href="https://www.linkedin.com/in/chhotu-kumar-13364923a/"
                  title="LinkedIn"
                  className="text-4xl"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="https://www.instagram.com/techwithchhotu/?"
                  title="Instagram"
                  className="text-4xl"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
