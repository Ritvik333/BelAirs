import mongoose from "mongoose"

let loginschema = new mongoose.Schema
({
    email: {type: String,unique: true,required: true},
    number: {type: String},
    name: {type: String, unique: true},
    from: {type: String},
    to: {type: String},
    Dep_date: {type: String},
    Ret_date: {type: String},
    Round: {type:String},

})

export default mongoose.model("Booking details", loginschema)