import mongoose from 'mongoose'
import adminModel from '../models/admin.model.js'
import bcrypt from 'bcrypt'
import dotenv from 'dotenv';
dotenv.config();
const seedAdmin = async () => {
    const username = process.env.ADMIN_USERNAME


    await mongoose.connect(process.env.MONGO_URI)
    const existingAdmin = await adminModel.findOne({username:username})
    if (!existingAdmin) {
        console.log(username)
        const pass = process.env.ADMIN_PASSWORD
        const hashedPass = await bcrypt.hash(pass, 10)
        console.log(hashedPass)
        const res = await adminModel.create({
            username: username,
            password: hashedPass
        })

        if (!res) {
            console.log("Error while seeding the Admin")

        } else (
            console.log("Admin Seeded Succesfully")
        )
    } else {
        console.log("Admin Already Exists")
    }
    await mongoose.connection.close()
}
seedAdmin()