const Offres = require("../models/Offres");
const Agence = require('../models/Agence');


// ADD AN OFFRE
exports.addOffre = async (req, res) => {
        const {direction, départ, arrivée, date, price, dirImage} = req.body;
    console.log("req agence",req);
    try {
        console.log("req.file", req);
        const newOffres = new Offres({
            direction,
            départ,
            arrivée,
            date,
            price,
            // photo:req.body.photo,
            dirImage: req.file.filename,
            agence:req.user.id,
        });
        const agence = newOffres.offres;
        const searchDirection = await Offres.findOne({direction, agence , départ});
        if(searchDirection)
        return res.status(401).json({msg: 'offre already exixts !!'});
        const agencyOffre = await newOffres.save();
        res.status(201).json(agencyOffre);
    } catch (error) {
        console.error(error);
        res.status(500).json({errors:error});
    }
};

//GET ALL AGENCE OFFRES
exports.getAllOffres = async (req,res) => {
    try {
        const allOffres = await Offres.find({ agence: req.params.agence });
        res.status(200).json(allOffres);
    } catch (error) {
        console.log(error);
        res.status(500).json({errors:error});
    }
};

//DELETE AGENCE OFFRE
exports.deleteOffre = async (req,res) => {
    try {
        const offre = await Offres.findById(req.params.id);
        await offre.remove();
        res.status(200).json({msg: 'post deleted successfully'});
    } catch (error) {
        console.log(error);
        res.status(500).json({errors:error});
    }
};
