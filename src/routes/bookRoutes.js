const express = require("express")
const router = express.Router();
const book = require("../models/book")

router.post("/", async (req, res)=>{
    try{
        const insert = await book.create(req.body);
        res.status(201).json(insert)
    }catch(err){
        res.status(400).json({error: err.message});
        console.log(err)
    }
})

router.get("/", async (req, res)=>{
    try{
        const insert = await book.find()
        res.status(200).json(insert)
    }catch(e){
        res.status(500).send(e)
        console.log(e);
    }
})

module.exports = router;
