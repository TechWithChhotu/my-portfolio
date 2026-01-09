// middleware/rateLimit.js
import rateLimit from "express-rate-limit";

export const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 3, // max 3 submissions per IP
  message: {
    success: false,
    msg: "Too many requests. Try again later.",
  },
});
