import mongoose from "mongoose";
// const {Schema} =mongoose;

const FlightSchema = new mongoose.Schema({
    airline:{
        type: String,
        requied: true
    },
    flightno:{
        type: String,
        required: true
    },
    arrivalCity:{
        type: String,
        required: true
    },
    destinationCity:{
        type: String,
        required: true
    },
    arrivalDate:{
        type: Date,
        required: true
    },
    departureDate:{
        type: Date,
        required: true
    },
    cheapestPrice:{
        type: Number,
        required:true
    },
});

export default mongoose.model("Flight", FlightSchema)