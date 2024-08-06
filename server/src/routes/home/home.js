const express = require('express')
const router = express.Router()
const Home = require('../models/home/home')

router.get('/',async(req,res)=>{
    try {
        const homeResponse = await Home.find()
        res.json(homeResponse)
    } catch (error) {
        console.log(error)
    }
})

router.post('/',async(req,res)=>{
    const data = new Home({
        name:req.body.name,
        position:req.body.position,
        prof_summary:req.body.prof_summary,
        createdAt:Date.now()
    })
    try {
        const add = await req.body;
        res.json(add)
    } catch (error) {
        
    }
})

module.exports = router