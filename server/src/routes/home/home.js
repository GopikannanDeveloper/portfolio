const express = require('express');
const router = express.Router();
const Home = require('../../models/home/home');

// GET route
router.get('/profile/', async (req, res) => {
  try {
    const homeResponse = await Home.find();
    res.json(homeResponse);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// POST route
router.post('/profile/', async (req, res) => {
  const data = new Home({
    name: req.body.name,
    position: req.body.position,
    prof_summary: req.body.prof_summary,
    createdAt: Date.now(),
  });

  try {
    const add = await data.save();
    res.json(add);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to create entry' });
  }
});

//PUT route
router.put('/profile/:id', async (req, res) => {
    const { id } = req.params;
    const { name, position, prof_summary } = req.body;
  
    try {
      const updatedData = await Home.findByIdAndUpdate(
        id,
        { name, position, prof_summary },
        { new: true }
      );
  
      if (!updatedData) {
        return res.status(404).json({ message: 'Data not found' });
      }
  
      res.json(updatedData);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to update document' });
    }
  });

  
module.exports = router;
