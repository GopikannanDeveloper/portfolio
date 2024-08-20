const express = require("express");
const router = express.Router();
const myLearn = require("../../models/learn/learn");

// GET route
router.get("/learn/", async (req, res) => {
  try {
    const LearnData = await myLearn.find();
    res.json(LearnData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

// POST route
router.post("/learn/", async (req, res) => {
  const data = new myLearn({
    tech_name: req.body.tech_name,
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
router.put("/learn/:id", async (req, res) => {
  const { id } = req.params;
  const { tech_name } = req.body;

  try {
    const updatedData = await Projects.findByIdAndUpdate(
      id,
      { tech_name },
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
