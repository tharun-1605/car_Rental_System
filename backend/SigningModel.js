import { Phone } from "lucide-react";
import mongoose from "mongoose";
import { v4 as uuidv4 } from 'uuid'; 

const userSchema = new mongoose.Schema({
    id: { type: String, default: uuidv4 }, 
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    phoneNumber:{type:String,requires:true},
    useraddrees:{type:String,requires:true}

});

const User = mongoose.model("User", userSchema);

export default User ;
