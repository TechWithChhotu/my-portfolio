import express from "express";
import router from "./router/router.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import { ownerAuth } from "./middleware/ownerAuth.js";
const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "PATCH"],
    credentials: true,
  })
);
// app.use(ownerAuth);
app.use("/api", router);

export default app;
