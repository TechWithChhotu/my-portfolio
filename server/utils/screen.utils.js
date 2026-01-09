import puppeteer from "puppeteer";
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

const linkToScreenshot = async (link) => {
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
