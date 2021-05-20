const express = require("express");
const router = new express.Router();
const MensRanking = require("../models/mens");


router.post("/mens", async (req, res) => {
    try{
          const addingMensRecords = new MensRanking(req.body)
          console.log(req.body);
          const insertMens = await addingMensRecords.save();
          res.status(201).send(insertMens);
    }catch(e){
              res.status(400).send(e);
    }
})

//we will handle the get request
router.get("/mens", async (req, res) => {
    try{
          const getMens = await MensRanking.find({}).sort({"ranking":1});
          res.send(getMens);
    }catch(e){
              res.status(400).send(e);
    }
})

//we will handle the get request for individual
router.get("/mens/:id", async (req, res) => {
    try{
         const _id = req.params.id;
         const getMen = await MensRanking.findById(_id); //if we have to call particular data like name so we use.find({_id:name})
//and also use it like router.get("/mens/:id/name") and const _id = req.params.name;
          res.send(getMen);
    }catch(e){
              res.status(400).send(e);
    }
})
// we will handle the patch request
router.patch("/mens/:id", async (req, res) => {
    try{
         const _id = req.params.id;
         const getMene = await MensRanking.findByIdAndUpdate(_id,req.body, {new:true}); 
                  res.send(getMene);
    }catch(e){
              res.status(500).send(e);
    }
})

// we will handle the delete request
router.delete("/mens/:id", async (req, res) => {
    try{
         
         const getMene = await MensRanking.findByIdAndDelete(req.params.id); 
                  res.send(getMene);
    }catch(e){
              res.status(500).send(e);
    }
})
module.exports = router;