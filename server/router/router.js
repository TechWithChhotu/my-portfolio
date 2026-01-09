import express from "express";
import {
  getProject,
  getTopProject,
  project,
  recaptureProjectImage,
  toggleIsTop,
} from "../controller/project.controller.js";
import { ownerAuth } from "../middleware/ownerAuth.js";
import { checkOwnerStatus } from "../controller/auth.controller.js";
import {
  createContact,
  createContactMail,
} from "../controller/contact.controller.js";
import { contactLimiter } from "../middleware/rateLimit.js";

const router = express.Router();

router.get("/ping", (req, res) => {
  res.status(200).json({
    success: true,
    msg: "pong",
  });
});

router.patch("/project/:id/top", ownerAuth, toggleIsTop);
router.patch("/project/:id/recapture", ownerAuth, recaptureProjectImage);
router.post("/project", ownerAuth, project);
router.get("/project", ownerAuth, getProject);
router.get("/project/top", ownerAuth, getTopProject);
router.get("/auth/status", ownerAuth, checkOwnerStatus);
router.post("/contact", createContact);
router.post("/contact-mail", contactLimiter, createContactMail);

export default router;
