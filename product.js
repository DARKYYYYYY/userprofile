const mongoose = require('mongoose');
const productSchema= mongoose.Schema({
    Name:String,
    UID: String,
    BloodGroup: String,
    Age: Number,
    Gender: String,
    ContactNumber: Number,
    EmergencyContactName: String,
    EmergencyContactNumber: Number,
    Allergies:String,
    Address: String  
} );
module.exports= mongoose.model("userdetail",productSchema);