import express from "express";
import router from "./router/router.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import { ownerAuth } from "./middleware/ownerAuth.js";
const app = express();
app.use(cookieParser());
app.use(express.json());
const clientURL = [
  "https://chhotuportfolio2026.netlify.app",
  "http://localhost:5173",
];
app.use(
  cors({
    // origin: "https://chhotuportfolio2026.netlify.app",
    // origin: "http://localhost:5173",
    origin: clientURL,
    methods: ["GET", "POST", "PUT", "PATCH"],
    credentials: true,
  })
);
// app.use(ownerAuth);
app.use("/api", router);

export default app;
