import express from "express";
import {register} from "../controllers/auth.js";

const router = express.Router();

/*router.get("/", (req,res)=>{
    res.send("Hello this is auth end point")
})*/
router.post("/register", register)

export default router