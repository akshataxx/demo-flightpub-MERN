import express from "express";
import Flight from "../models/Flight.js";
const router = express.Router();

//Create
router.post("/", async(req,res)=>{
    const newFlight = new Flight(req.body)
    try{
        const savedFlight= await newFlight.save(
            res.status(200).json(savedFlight)
        )
    }catch(err){
        res.status(500).json(err)
    }
})
//Update
//Delete
//Get
//Getall
export default router