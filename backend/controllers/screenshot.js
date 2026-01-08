import puppeteer from "puppeteer";

const screenshot = async (req, res) => {
  const { url } = req.query;

  if (!url) {
    return res.status(400).send("URL is required");
  }

  let browser;

  try {
    browser = await puppeteer.launch({
      headless: "new",
      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--disable-dev-shm-usage",
        "--disable-gpu",
      ],
    });

    const page = await browser.newPage();

    await page.setViewport({
      width: 1280,
      height: 800,
      deviceScaleFactor: 1,
    });

    await page.goto(url, {
      waitUntil: "networkidle2",
      timeout: 60000,
    });

    await new Promise((r) => setTimeout(r, 3000));

    const buffer = await page.screenshot({
      type: "png",
      fullPage: true,
    });

    res.set("Content-Type", "image/png");
    res.set("Cache-Control", "no-store");
    res.send(buffer);
  } catch (error) {
    console.error("Screenshot Error:", error);
    res.status(500).send("Failed to capture screenshot");
  } finally {
    if (browser) await browser.close();
  }
};

export default screenshot;
