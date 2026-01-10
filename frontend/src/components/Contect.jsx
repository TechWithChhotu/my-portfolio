import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";

export default function Contact() {
  const API_URL = import.meta.env.VITE_API_URL;
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      console.log(formData);
      console.log("API_URL: ", API_URL);

      const res = await axios.post(`${API_URL}/api/contact`, formData, {
        withCredentials: true,
      });
      console.error("contact res => ", res);
      if (res) {
        alert("Message sent successfully ✅");
      }

      // reset form
      setFormData({
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      alert("Failed to send message ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-slate-800">
      <div className=" flex justify-center items-center min-h-screen max-sm:min-h-fit rounded">
        <div className="  rounded-xl overflow-hidden bg-[#0F1624] ">
          <h2 className="text-3xl sm:text-2xl text-center mb-10 text-white">
            <span className="relative inline-block pb-2">
              <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 bg-[length:100%_2px] bg-no-repeat bg-bottom">
                Contact Me
              </span>
            </span>
          </h2>
          <div className="flex flex-col md:flex-row gap-12  justify-center items-center">
            {/* className="flex flex-col md:flex-row gap-12 items-start" */}
            <form
              className="max-sm:h-112.5 max-sm:px-5 max-sm:pt-4  w-87.5  p-10  rounded-l-lg"
              onSubmit={handleSubmit}
            >
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-100 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  autoCapitalize="new-name"
                  value={formData.name}
                  onChange={handleChange}
                  required
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
                  name="phone"
                  id="phone"
                  className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-100 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  autoComplete="new-Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
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
                  value={formData.email}
                  onChange={handleChange}
                  required
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
                  name="subject"
                  id="subject"
                  className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-100 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  autoComplete="new-Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
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
                  name="message"
                  id="message"
                  className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-100 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  autoComplete="new-Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                <label
                  htmlFor="Message"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-left peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Message
                </label>
              </div>
              <div className="flex flex-col items-center justify-center   bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-2xl">
                <button
                  type="submit"
                  disabled={loading}
                  className="text-white w-full h-full bg-gradient-cyan-purple-pink px-5 py-2 rounded-md Gradient-btn cursor-pointer "
                >
                  {loading ? "Sending..." : "Submit"}
                </button>
              </div>
            </form>
            {/* INFO */}

            <div className="w-full md:w-1/2 text-white space-y-6 pb-5 ">
              <h3 className="text-2xl text-center md:text-left">
                Chhotu Patel
              </h3>

              <div className="text-gray-400 space-y-2 text-center md:text-left">
                <p>
                  <b>Address:</b> Sheikhpura, Bihar, India
                </p>
                <p>
                  <b>Phone:</b> +91 8920823219
                </p>
                <p>
                  <b>Email:</b> chhotustudymail@gmail.com
                </p>
              </div>

              <div className="flex justify-center md:justify-start gap-6 text-3xl">
                <a
                  href="https://www.linkedin.com/in/chhotu-kumar-13364923a/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="https://www.instagram.com/techwithchhotu/"
                  target="_blank"
                  rel="noreferrer"
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
