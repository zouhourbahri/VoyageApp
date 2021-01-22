const User = require("../models/User");
const ProfilPerson = require("../models/ProfilPerson");
const Agence = require("../models/Agence");
const Offres = require("../models/Offres");

                        //********HANDLE USERS *******/

// Get all Users
exports.getAllUserInfos = async (req,res) => {
    try {
        const all = await User.find().select("-password");
        res.status(200).json(all);
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
};

//Add Admin to The APP
exports.addAdmin = async (req,res) => {
try {
    const searchUser = await User.findOne({_id: req.params.id});
    const user = await User.updateOne({_id: req.params.id}, {isAdmin: !searchUser.isAdmin});
    const searchUser2 = await User.findOne({_id: req.params.id});
    res.status(202).json({admin : searchUser2, msg: "new admin added successfully"});
} catch (error) {
    return res.status(500).json({msg: error.message});
}
};

//Delete User By ID
exports.deleteUser = async (req,res) => {
    try {
        //Delete User Account
        await User.findOneAndDelete({_id: req.params.id});

        //Delete User Posts
        await ProfilPerson.deleteMany({user : req.params.id});
        res.status(200).json({msg: 'User Deleted Successfully'});
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
};

// Ban A User
exports.banUser = async (req,res) => {
    try {
        const searchUser = await User.findOne({_id: req.params.id});
        const user = await User.updateOne({_id: req.params.id}, {isBanned: !searchUser.isBanned});
        const searchUser2 = await User.findOne({_id: req.params.id});
        res.status(200).json({searchUser2, msg:'user got banned'});
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
};

                            //*******HANDLE AGENCES ******/
//GET ALL AGENCES
exports.getAllAgencesInfos = async (req,res) => {
    try {
        const Agences = await Agence.find().select("-password");
        res.status(201).json(Agences);
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
};

//Delete Agence By ID
exports.deleteAgence = async (req,res) => {
    try {
        //Delete Agence Account
        await Agence.findOneAndDelete({_id: req.params.id});

        //Delete Agence Offres
        await Offres.deleteMany({agence : req.params.id});
        res.status(200).json({msg: 'Agence Deleted Successfully'});
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
};

// Ban An Agence
exports.banAgence = async (req,res) => {
    console.log("id", req.params.id);
    try {
        const searchAgence = await Agence.findOne({_id:req.params.id});
        const agence = await Agence.updateOne({_id: req.params.id}, {isBanned: !searchAgence.isBanned});
        const searchAgence2 = await Agence.findOne({_id:req.params.id});
        res.status(200).json({searchAgence2, msg:'agence got banned'});
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
};