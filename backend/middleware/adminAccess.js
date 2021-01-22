const User = require("../models/User");
const Agence = require("../models/Agence");

const adminAccess = async (req,res,next) => {
    try {
    const adminU = await User.findOne({isAdmin: req.user.isAdmin});
    const adminA = await Agence.findOne({isAdmin: req.user.isAdmin});
        if(adminU && adminU.isAdmin === false) {
            return res.status(400).json({msg: 'Access denied' })
        } else if (adminA && adminA.isAdmin === false) {
            return res.status(400).json({msg: 'Access denied' })
        } else
        { next() }
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
};

module.exports = adminAccess;