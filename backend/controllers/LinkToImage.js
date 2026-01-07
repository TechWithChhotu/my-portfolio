import projects from "../data/Projects.js";

const LinkToImage = async (req, res) => {
  try {
    /* ✅ Force HTTPS (Render / Prod fix) */
    const protocol =
      req.headers["x-forwarded-proto"] === "https" ? "https" : req.protocol;

    const baseURL = `${protocol}://${req.get("host")}`;

    const projectsWithImages = projects.map((project) => {
      return {
        ...project,

        /* ✅ Dynamic, HTTPS-safe image URL */
        image: `${baseURL}/api/screenshot?url=${encodeURIComponent(
          project.link
        )}`,
      };
    });

    /* ✅ Prevent browser caching stale screenshots */
    res.setHeader("Cache-Control", "no-store");

    res.status(200).json({
      success: true,
      projects: projectsWithImages,
    });
  } catch (error) {
    console.error("LinkToImage Error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to generate project images",
    });
  }
};

export { LinkToImage };

// import projects from "../data/Projects.js";

// const LinkToImage = async (req, res) => {
//   try {
//     const baseURL = `${req.protocol}://${req.get("host")}`;

//     const projectsWithImages = projects.map((project) => ({
//       ...project,
//       image: `${baseURL}/api/screenshot?url=${encodeURIComponent(
//         project.link
//       )}`,
//     }));

//     res.status(200).json({
//       success: true,
//       projects: projectsWithImages,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Failed to build project images" });
//   }
// };

// export { LinkToImage };
