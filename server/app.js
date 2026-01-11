import express from "express";
import router from "./router/router.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import { ownerAuth } from "./middleware/ownerAuth.js";
const app = express();
app.use(cookieParser());
app.use(express.json());
const allowedOrigins = [
  "http://localhost:5173",
  "https://chhotuportfolio2026.netlify.app",
  "https://chhotupatel2026.netlify.app/",
];
app.use(
  cors({
    // origin: "https://chhotupatel2026.netlify.app/",
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "PATCH"],
    credentials: true,
  })
);
// app.use(ownerAuth);
app.use("/api", router);

export default app;
