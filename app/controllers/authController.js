import User from "../models/User.js";
import bcrypt from "bcrypt";
import { generateToken } from "../services/tokenServices.js";


export const register = async (req, res) => {

  try {

    const { username, password } = req.body;

    
    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists"
      });
    }

    
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      username,
      password: hashedPassword
    });

    await user.save();

    res.status(201).json({
      message: "User registered"
    });

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

};


export const login = async (req, res) => {

  try {

    const { username, password } = req.body;

    const user = await User.findOne({ username });

    if (!user) {

      return res.status(400).json({
        message: "User not found"
      });

    }

    const validPassword = await bcrypt.compare(
      password,
      user.password
    );

    if (!validPassword) {

      return res.status(400).json({
        message: "Invalid password"
      });

    }

    const token = generateToken({
      id: user._id,
      username: user.username
    });

    res.json({
      message: "Login successful",
      token
    });

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

};
