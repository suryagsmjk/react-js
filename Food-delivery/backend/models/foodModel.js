import mongoose  from "mongoose";

const foodSchema = new mongoose.Schema({
    name:{type:String,require:true},
    description:{type:String,require:true},
    price:{type:Number,require:true},
    image:{type:Number,require:true},
    category:{type:Number,require:true}
})

const foodModel = mongoose.Model.food || mongoose.model("food",foodSchema);
export default foodModel;