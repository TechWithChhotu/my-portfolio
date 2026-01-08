import express from "express";
import {
  getProject,
  getTopProject,
  project,
  toggleIsTop,
} from "../controller/project.controller.js";

const router = express.Router();

router.get("/ping", (req, res) => {
  res.status(200).json({
    success: true,
    msg: "pong",
  });
});

router.post("/project", project);
router.get("/project", getProject);
router.get("/project/top", getTopProject);
router.patch("/project/:id/top", toggleIsTop);

export default router;
