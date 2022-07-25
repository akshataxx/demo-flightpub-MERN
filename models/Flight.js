import mongoose from "mongoose";
// const {Schema} =mongoose;

const FlightSchema = new mongoose.Schema({
    airline:{
        type: String,
        required: true,
    },
    flightId:{
        type: String,
        required: true,
    },
    departureCity:{
        type: String,
        required: true,
    },
    arrivalCity:{
        type: String,
        required: true,
    },
    cheapestPrice:{
        type: Number,
        required:true,
    },
});

export default mongoose.model("Flight", FlightSchema)