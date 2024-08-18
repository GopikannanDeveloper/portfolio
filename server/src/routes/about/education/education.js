const express = require("express");
const router = express.Router();
const Education = require("../../../models/about/education/education");

//GET

router.get("/education/", async (req, res) => {
  try {
    const educationData = await Education.find().sort({ degree: 1  });
    res.json({
      success: true,
      message: "Data retrieved successfully",
      data: educationData.length ? educationData : [],
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

//POST
router.post("/education/", async (req, res) => {
  const data = new Education({
    degree: req.body.degree,
    institution_name: req.body.institution_name,
    duration: req.body.duration,
    location:req.body.location,
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

router.put("/education/:id", async (req, res) => {
  const { id } = req.params;
  const { degree, institution_name, duration ,location} = req.body;

  try {
    const updatedData = await Education.findByIdAndUpdate(
      id,
      { degree, institution_name, duration ,location},
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
