const express = require("express");
const router = express.Router();
const Projects = require("../../models/projects/projects");

// GET route
router.get("/projects/", async (req, res) => {
  try {
    const projectData = await Projects.find();
    res.json(projectData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

// POST route
router.post("/projects/", async (req, res) => {
  const data = new Projects({
    title: req.body.title,
    desc: req.body.desc,
    tech_stack: req.body.tech_stack,
    duration:req.body.duration,
    createdAt: Date.now(),
  });

  try {
    const add = await data.save();
    res.json(add);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create entry" });
  }
});

//PUT route
router.put("/projects/:id", async (req, res) => {
  const { id } = req.params;
  const { title, desc, tech_stack,duration } = req.body;

  try {
    const updatedData = await Projects.findByIdAndUpdate(
      id,
      { title, desc, tech_stack,duration },
      { new: true }
    );

    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }

    res.json(updatedData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to update document" });
  }
});

module.exports = router;
