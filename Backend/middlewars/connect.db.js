import mongoose from "mongoose"

export const connectdb=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDb connected Succesfully")
    } catch (error) {
        console.log("MongoDB connection failed")
    }
}