import adminModel from "../models/admin.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"; // You forgot this

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

    const token = jwt.sign(
      { username: Admin.username, },
      process.env.SECRET_KEY,
      { expiresIn: "1d" }
    );

    
    res.cookie("token", token, {
      httpOnly: true, 
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });

    return res.status(200).json({
      message: "Admin logged in successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json("Server error while logging in the admin");
  }
};
