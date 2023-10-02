import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user.js";
// register User

export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    console.log("The Body for this request: ", req.body);
    const salt = await bcrypt.genSalt();
    const passHash = await bcrypt.hash(password, salt);
    const NewUser = new User({
      username,
      email,
      password: passHash,
    });
    const savedUser = await NewUser.save();
    res.status(200).json(savedUser);
  } catch (err) {
    console.log(err);
    res.status(404).json({ error: err.message });
  }
};

//logging In

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("The Body for this request: ", req.body);
    const user = await User.findOne({ email: email });
    if (!user) return res.status(400).json({ msg: "User doesnot exist" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ msg: "The password entered is incorrect" });

    const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY);
    delete user.password;
    res.status(200).json({ token, user });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

// Verify Token
export const verifyToken = async (req, res) => {
  try {
    const { token } = req.body;
    console.log(token);
    console.log("Inside the verify serve");
    if (token) {
      const decode = jwt.verify(token, process.env.SECRET_KEY);
      res.json({
        login: true,
        data: decode,
      });
    }
  } catch (err) {
    console.error("JWT Verification fails: ", err.message);
    res.status(500).json({ err: err.message });
  }
};

// Get User Details
export const getUserDeatils = async (req, res) => {
  const { username } = req.params;
  const user = await User.findOne({ username: username });
  res.status(200).json({ user });
};

// Update the user

export const updateUserDetails = async (req, res) => {
  try {
    const { username, email, age, work, contactNo, bio, gender, isPremium } =
      req.body;
    const user = await User.findOne({ username: username });
    if (user != "") {
      user.contactNo = contactNo;
      user.username = username;
      user.email = email;
      user.age = age;
      user.work = work;
      user.bio = bio;
      user.gender = gender;
      user.isPremium = isPremium;
      return res.status(200).json({ mesage: "Details updated successfully" });
    } else {
      res.status(404).json({
        message:
          "Please enter the username used while entering the applicartion",
      });
    }
  } catch (err) {
    console.error("User details update failed: ", err.message);
    res.status(500).json({ err: err.message });
  }
};

export async function CheckUser(username) {
  const user = await User.findOne({ username: username });
  if (user != "") {
    return true;
  }
  return false;
}
