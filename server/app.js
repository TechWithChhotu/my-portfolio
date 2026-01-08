import express from "express";
import router from "./router/router.js";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "https://chhotu-patel2025.netlify.app",
    methods: ["GET", "POST", "PUT", "PATCH"],
    credentials: true,
  })
);

app.use("/api", router);

export default app;
