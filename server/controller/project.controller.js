import Project from "../model/project.model.js";
import linkToSrceenshot from "../utils/screen.utils.js";

const project = async (req, res) => {
  if (!req.isOwner) {
    return res.status(403).json({
      success: false,
      msg: "you are not authorized",
    });
  }
  try {
    const { title, desc, link, isTop, sellingPrice, projectRepo } = req.body;

    // ✅ wait for screenshot URL
    const image = await linkToSrceenshot(link);

    const project = await Project.create({
      title,
      desc,
      link,
      isTop,
      sellingPrice,
      projectRepo,
      image, // STRING URL
    });

    res.status(201).json({
      success: true,
      project,
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

const getTopProject = async (req, res) => {
  console.error("TEST");

  try {
    const projects = await Project.find({ isTop: true }).limit(4).lean();

    return res.status(200).json({
      success: true,
      count: projects.length,
      projects,
    });
  } catch (error) {
    console.error("getTopProject error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch top projects",
    });
  }
};

/**
 * ✅ Get ALL projects
 */
const getProject = async (req, res) => {
  try {
    const projects = await Project.find().lean();

    return res.status(200).json({
      success: true,
      count: projects.length,
      projects,
    });
  } catch (error) {
    console.error("getProject error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch projects",
    });
  }
};

const toggleIsTop = async (req, res) => {
  if (!req.isOwner) {
    return res.status(403).json({
      success: false,
      msg: "you are not authorized",
    });
  }

  try {
    const { id } = req.params;

    const project = await Project.findById(id);
    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    // toggle
    project.isTop = !project.isTop;
    await project.save();

    return res.status(200).json({
      success: true,
      message: "Project updated successfully",
      project,
    });
  } catch (error) {
    console.error("toggleIsTop error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to update project",
    });
  }
};
const recaptureProjectImage = async (req, res) => {
  // 🔐 Authorization
  if (!req.isOwner) {
    return res.status(403).json({
      success: false,
      msg: "you are not authorized",
    });
  }

  try {
    const { id } = req.params;

    const project = await Project.findById(id);

    if (!project) {
      return res.status(404).json({
        success: false,
        msg: "Project not found",
      });
    }

    // 🖼️ Re-capture screenshot (latest UI)

    const newImage = await linkToSrceenshot(project.link);

    // 🧹 OPTIONAL: delete old image if stored in cloud
    // await deleteFromCloudinary(project.image);

    project.image = newImage;
    project.updatedAt = new Date();

    await project.save();

    res.json({
      success: true,
      msg: "Project image re-captured successfully",
      image: newImage,
    });
  } catch (error) {
    console.error("Re-capture error:", error);

    res.status(500).json({
      success: false,
      msg: "Failed to re-capture project image",
      error: error.message,
    });
  }
};

export {
  project,
  getTopProject,
  getProject,
  toggleIsTop,
  recaptureProjectImage,
};
