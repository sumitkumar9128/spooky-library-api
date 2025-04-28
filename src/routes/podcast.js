const express = require("express")
const router = express.Router();
const pod = require("../models/podcast")

router.post("/", async(req, res)=>{
    try{
        const insert = await pod.create(req.body);
        res.status(201).json(insert)
    }catch(e){
        res.status(400).json({error: e.message})
    }
})

router.get("/", async(req, res)=>{
    try{
        const po = await pod.find();
        res.status(200).json(po)
    }catch(e){
        res.status(500).json({error: e.message})
        console.log(e);
    }
})

module.exports = router;