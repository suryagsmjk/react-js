import mongoose  from "mongoose";
 
export const connectDB =async ()=>{
    await  mongoose.connect("mongodb+srv://suryagsmjk:Moonstar9790@cluster0.86df8ws.mongodb.net/Food-delivery").then(()=>console.log("DB Connected"));
}
