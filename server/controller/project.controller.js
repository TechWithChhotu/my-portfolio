import Project from "../model/project.model.js";
import linkToSrceenshot from "../utils/screen.utils.js";

const project = async (req, res) => {
  try {
    const { title, desc, link, isTop } = req.body;

    console.log("Project controller called");

    // ✅ wait for screenshot URL
    const image = await linkToSrceenshot(link);

    const project = await Project.create({
      title,
      desc,
      link,
      isTop,
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
export { project, getTopProject, getProject, toggleIsTop };
