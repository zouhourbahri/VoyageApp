const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const User = require("../models/User");

const secretOrKey = config.get("secretOrKey");

// Register Controller
exports.register = async (req, res) => {
  const { name, email, password, hobbies } = req.body;
  try {
    const searchEmail = await User.findOne({ email });
    if (searchEmail)
      return res.status(401).json({ msg: `email already exists!!!` });
    const newUser = new User({
      name,
      email,
      password,
      hobbies,
    });
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    newUser.password = hash;
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ errors: error });
  }
};

//Login Controller

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ msg: `Bad request!!` });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ msg: `Bad request!!!` });
    const payload = {
      id: user._id,
      name: user.name,
      email: user.email,
    };
    const token = await jwt.sign(payload, secretOrKey);
    return res.status(200).json({ token: `Bearer ${token}` });
  } catch (error) {
    console.log(error);
    res.status(500).json({ errors: error });
  }
};


