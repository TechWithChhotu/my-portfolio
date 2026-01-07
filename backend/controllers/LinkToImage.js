import projects from "../data/Projects.js";

const LinkToImage = async (req, res) => {
  try {
    const baseURL = `${req.protocol}://${req.get("host")}`;

    const projectsWithImages = projects.map((project) => ({
      ...project,
      image: `${baseURL}/api/screenshot?url=${encodeURIComponent(
        project.link
      )}`,
    }));

    res.status(200).json({
      success: true,
      projects: projectsWithImages,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to build project images" });
  }
};

export { LinkToImage };

// export { Screenshot };

// import projects from "../data/Projects";

// const LinkToImage = async (req, res) => {
//   const { url } = req.query;

//   if (!url) {
//     return res.status(400).json({ error: "URL is required" });
//   }

//   try {
//     const browser = await puppeteer.launch({
//       headless: "new",
//       args: ["--no-sandbox", "--disable-setuid-sandbox"],
//     });

//     const page = await browser.newPage();

//     await page.setViewport({
//       width: 1280,
//       height: 800,
//       deviceScaleFactor: 1,
//     });

//     await page.goto(url, {
//       waitUntil: "networkidle2",
//       timeout: 30000,
//     });

//     // ✅ FULL PAGE SCREENSHOT
//     const screenshot = await page.screenshot({
//       type: "png",
//       fullPage: true,
//     });

//     await browser.close();

//     res.set("Content-Type", "image/png");
//     res.send(screenshot);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Screenshot failed" });
//   }
// };

// export { LinkToImage };
