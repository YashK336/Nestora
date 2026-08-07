import User from "../models/User.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/generateToken.js";

export const login = async (req, res) => {
  try {

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user || !(await bcrypt.compare(password, user.password))){
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    const token = generateToken(user._id);

    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};