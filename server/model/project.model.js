import mongoose from "mongoose";
import { type } from "os";

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    desc: String,

    image: String, // Cloudinary URL

    link: {
      type: String,
      required: true,
    },

    /* 🔥 CONTROL FIELDS */
    isTop: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Project = mongoose.model("Project", projectSchema);
export default Project;
