// import puppeteer from "puppeteer";
// const linkToSrceenshot = async (link) => {
//   if (!link) {
//     return "Link is required";
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

//     await page.goto(link, {
//       waitUntil: "networkidle2",
//       timeout: 30000,
//     });

//     // ✅ FULL PAGE SCREENSHOT
//     const screenshot = await page.screenshot({
//       type: "png",
//       fullPage: true,
//     });

//     await browser.close();

//     // res.set("Content-Type", "image/png");
//     // res.send(screenshot);
//     console.log("screenshot: ", screenshot);

//     return screenshot;
//   } catch (err) {
//     console.error(err);
//     return err;
//   }
// };

// export default linkToSrceenshot;
import puppeteer from "puppeteer";
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

const linkToScreenshot = async (link) => {
  console.log(
    process.env.CLOUDINARY_CLOUD_NAME,
    process.env.CLOUDINARY_API_KEY,
    process.env.CLOUDINARY_API_SECRET
  );
  if (!link) throw new Error("Link is required");

  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });

  await page.goto(link, { waitUntil: "networkidle2" });

  // Save locally first
  const filePath = `screenshots/${Date.now()}.png`;
  await page.screenshot({ path: filePath, fullPage: true });

  await browser.close();

  // Upload to cloudinary
  const result = await cloudinary.uploader.upload(filePath, {
    folder: "projects",
  });

  fs.unlinkSync(filePath); // delete local file

  return result.secure_url; // ✅ STRING
};

export default linkToScreenshot;
