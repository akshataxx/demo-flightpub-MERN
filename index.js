import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import flightsRoute from "./routes/flights.js";
//import selectedflightRoute from "./routes/selectedflight.js";
const app = express()
dotenv.config()
const connect = async () => {
try{
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB")
} catch (error){
    throw error;
}};


//2 listeners to throw a msg at any point if connection is lost from db. Can be removed at later stage
//just done for idk good programming and easy to debug etc etc
mongoose.connection.on("disconnected", ()=>{
    console.log("mongodb disconnected at this fkin point")
})
mongoose.connection.on("connected", ()=>{
    console.log("mongodb connected!!!")
})

//middlewares
//middleware for insomnia/postman
app.use(express.json());

app.use("/auth", authRoute);
app.use("/users", usersRoute);
app.use("/flights", flightsRoute);
//app.use("/selectedflight", selectedflightRoute);

app.listen(8800, ()=>{
    connect()
    console.log("Connected to backend!!! ")})
