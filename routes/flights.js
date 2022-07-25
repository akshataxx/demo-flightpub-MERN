import express from "express";
import Flight from "../models/Flight.js";
const router = express.Router();

//All da CRUD commands for database
//Download postman or insomnia whatever doesn't matter

//Create
router.post("/", async(req,res)=>{

    const newFlight = new Flight(req.body);
    try{

        // console.log(req);
        const savedFlight= await newFlight.save()
            res.status(200).json(savedFlight);
    }catch(err){
        res.status(500).json(err);
    }
});
//Update
router.put("/:id", async(req,res)=>{
    try{

        console.log(req);
        const updatedFlight= await Flight.findByIdAndUpdate(req.params.id, {$set: req.body},{new:true});
        res.status(200).json(updatedFlight);
    }catch(err){
        res.status(500).json(err);
    }
});
//Delete
router.delete("/:id", async(req,res)=>{
    try{

        // console.log(req);
        await Flight.findByIdAndDelete(req.params.id);
        res.status(200).json("Flight has been deleted");
    }catch(err){
        res.status(500).json(err);
    }
});
//Get
router.get("/:id", async(req,res)=>{
    try{

        // console.log(req);
        const flight= await Flight.findById(req.params.id);
        res.status(200).json(flight);
    }catch(err){
        res.status(500).json(err);
    }
});

//Getall
router.get("/", async(req,res)=>{
    try{

        // console.log(req);
        const flights= await Flight.find();
        res.status(200).json(flights);
    }catch(err){
        res.status(500).json(err);
    }
});

export default router;