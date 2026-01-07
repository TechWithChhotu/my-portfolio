import express from "express";
import puppeteer from "puppeteer";
import cors from "cors";
import { LinkToImage } from "./controllers/LinkToImage.js";
import router from "./routes/routes.js";
import screenshot from "./controllers/screenshot.js";

const app = express();
app.use(cors());
app.use("/api", router);
app.get("/screenshot", screenshot);
app.get("/project", LinkToImage);

app.listen(5000, () => {
  console.log("🚀 Screenshot server running on port 5000");
});
