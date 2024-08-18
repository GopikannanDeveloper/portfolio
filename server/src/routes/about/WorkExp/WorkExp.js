const express = require("express");
const router = express.Router();
const WorkExp = require("../../../models/about/workExp/workExp");

//GET

router.get("/experience/", async (req, res) => {
  try {
    const experienceData = await WorkExp.find().sort({ createdAt: -1 });;
    res.json({
      success: true,
      message: "Data retrieved successfully",
      data: experienceData.length ? experienceData : [],
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

//POST
router.post("/experience/", async (req, res) => {
  const data = new WorkExp({
    position: req.body.position,
    job_type: req.body.job_type,
    company: req.body.company,
    location: req.body.location,
    duration: req.body.duration,
    createdAt: Date.now(),
  });
  try {
    const add = await data.save();
    res.json(add);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

//PUT

router.put("/experience/:id", async (req, res) => {
  const { id } = req.params;
  const { position, job_type, company, location, duration } = req.body;

  try {
    const updatedData = await WorkExp.findByIdAndUpdate(
      id,
      { position, job_type, company, location, duration },
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
