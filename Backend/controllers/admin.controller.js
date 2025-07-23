import adminModel from "../models/admin.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"; 

export const adminLogin = async (req, res) => {
  try {
    const { username, password } = req.body;

    const Admin = await adminModel.findOne({ username });
    if (!Admin) {
      return res.status(404).json("Admin not found");
    }

    const isMatch = await bcrypt.compare(password, Admin.password);
    if (!isMatch) {
      return res.status(401).json("Invalid password");
    }

    const token = jwt.sign({ username: Admin.username, },process.env.SECRET_KEY,{ expiresIn: "1d" });

    
    return res.cookie("token", token, {
      httpOnly: true, 
      maxAge: 24 * 60 * 60 * 1000,
    }).status(200).json({
      message: "Admin logged in successfully",
      success:true
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json("Server error while logging in the admin");
  }
};
export const adminData=async(req,res)=>{
  try {
    const { username, admin } = req.admin; // from JWT payload

    res.status(200).json({
      username,
      role: admin,
      permissions: ["manage_courses", "manage_training", "view_users"]
    });
  } catch (error) {
    res.status(500).json("Failed to fetch admin data");
  }
};
export const adminLogout=async(req,res)=>{
  try {
    return res.cookie("token","",{httpOnly:true}).status(200).json({
      success:true,
      message:"LogOut Succesfully"
    })
  } catch (error) {
    return res.json(`Server Error while logging out ${error.message}`)
  }
}
