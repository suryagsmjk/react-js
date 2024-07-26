import mongoose  from "mongoose";
 
export const connectDB =async ()=>{
    await  mongoose.connect("mongodb+srv://suryagsmjk:Moonstar9790@cluster0.1bupr27.mongodb.net/fooddelivery").then(()=>console.log("DB Connected"));
}
