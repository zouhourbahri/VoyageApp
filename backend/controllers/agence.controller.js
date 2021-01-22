const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const Agence = require("../models/Agence");
const secretOrKey = config.get("secretOrKey");

// Register Controller
exports.registerAgency = async (req,res) =>{
    const { name, email, phoneNumber, password } = req.body;
    try {
        const lookForEmail = await Agence.findOne({email});
        if(lookForEmail)
        return res.status(401).json({msg:'email already exists !'});
        const newAgence = new Agence({
            name,
            email,
            phoneNumber,
            password,
        });
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password,salt);
        newAgence.password = hash;
        await newAgence.save();
        res.status(201).json(newAgence);
    } catch (error) {
        console.log(error);
        res.status(500).json({error:error});
    }
};

//Login Controller
exports.loginAgency = async (req,res) => {
    const {email,password} = req.body;
    try {
        const agence = await Agence.findOne({email});
        if (!agence) return res.status(404).json({msg:'Bad creduntial !'});
        const isMatch = await bcrypt.compare(password, agence.password);
        if (!isMatch) return res.status(401).json({msg:'Bad creduntial !!'});
        const payload = {
            id: agence._id,
            name: agence.name,
            email: agence.email,
        };
        const token = await jwt.sign(payload, secretOrKey);
        return res.status(200).json({token: `Bearer ${token}`});
    } catch (error) {
        console.log(error);
        res.status(500).json({errors: error});
    }
};