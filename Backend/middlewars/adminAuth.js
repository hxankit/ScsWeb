import jwt from "jsonwebtoken";

export const AdminAuth = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    // console.log(token)
    if (!token) {
      return res.status(401).json("Token not provided");
    }

    const decodedtoken = jwt.verify(token, process.env.SECRET_KEY);

    // Ensure the token represents an admin user
    if (!decodedtoken.username || decodedtoken.username !== "scsadmin") {
      return res.status(403).json("Unauthorized: Admin access required");
    }

    // Attach admin data to req for later use
    req.admin = decodedtoken;

    next();
  } catch (error) {
    return res.status(500).json(`Server error: ${error.message}`);
  }
};
