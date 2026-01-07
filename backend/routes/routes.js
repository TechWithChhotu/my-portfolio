import express from "express";

import { LinkToImage } from "../controllers/LinkToImage.js";
import screenshot from "../controllers/screenshot.js";

const router = express.Router();

router.get("/projects", LinkToImage);
router.get("/screenshot", screenshot);

export default router;
