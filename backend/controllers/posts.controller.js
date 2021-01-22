const Agence = require("../models/Agence");
const Offres = require("../models/Offres");
const ProfilPerson = require("../models/ProfilPerson");
const User = require("../models/User");

//ADD A POST
exports.publish = async (req, res) => {
    console.log("file", req.file && req.file);
    const { direction, year, description , dirImage} = req.body;
    console.log("req user", req);
try {
    const newDirection = new ProfilPerson({
    direction,
    year,
    description,
    dirImage: req.file.filename,
    // dirImage: req.file && req.file.filename,
    user: req.user.id,
    });
    const user = newDirection.user;
    const searchDirection = await ProfilPerson.findOne({ direction, user });
    if (searchDirection)
    return res.status(401).json({ msg: `direction already exists !!` });
    const directionPost = await newDirection.save();
    res.status(201).json(directionPost);
} catch (error) {
    console.error(error);
    res.status(500).json({ errors: error.message });
}
};

//GET ALL USERS POSTS
exports.getAll = async (req, res) => {
try {
    const allPosts = await ProfilPerson.find().populate('user', ['name']);
    res.status(200).json(allPosts);
} catch (error) {
    console.log(error);
    res.status(500).json({ errors: error });
}
};

//GET ALL AGENCES 
exports.getAgences = async (req,res) => {
    try {
        const userAgences = await Agence.find();
        res.status(200).json(userAgences);
    } catch (error) {
        console.log(error);
    res.status(500).json({ errors: error });
    }
};

//GET ALL AGENCES OFFRES
exports.getOffres = async(req,res) => {
    try {
        const userOffres = await Offres.find().populate('agence', ['name']);
        res.status(200).json(userOffres);
    } catch (error) {
        console.log(error);
    res.status(500).json({ errors: error });
    }
};

//GET ALL OFFRES OF ONE AGENCE
exports.agenceOffres = async(req,res) => {
    try {
        const OffresA = await Offres.find({agence: req.params.agence});
        res.status(200).json(OffresA);
    } catch (error) {
        console.log(error);
        res.status(500).json({ errors: error });
    }
};

//Note An Agence 
exports.notateAgence = async (req,res) => {
    try {
        const agence = await Agence.findById(req.params.id);
        if(agence.Rating.filter(el=> el.user.toString()=== req.user.id).length>0){
            return res.status(400).json({msg:'agence alreadynoted'});
        }
        agence.Rating.unshift({user:req.user.id, rate: req.params.rate}); //add the user on the beginnig
        await agence.save();
        res.status(200).json(agence.Rating);
    } catch (error) {
        console.log(error);
    res.status(500).json({ errors: error });
    }
};

//GET ALL POSTS OF ONE USER
exports.getUserPosts = async (req, res) => {
try {
    const posts = await ProfilPerson.find({ user: req.params.user });
    res.status(200).json(posts);
} catch (error) {
    console.log(error);
    res.status(500).json({ errors: error });
}
};

//DELETE A POST OF ONE USER BY ID
exports.deleteUserPost = async (req, res) => {
try {
    const post = await ProfilPerson.findById(req.params.id);
    if (post.user.toString() !== req.user.id) {
    return res
        .status(401)
        .json({ msg: "not authorized to delete this post" });
    }
    await post.remove();
    res.status(200).json({ msg: "post deleted successfully" });
} catch (error) {
    console.log(error);
    res.status(500).json({ errors: error });
}
};

//LIKE A POST
exports.like = async (req, res) => {
    try {
        const post = await ProfilPerson.findById(req.params.id);
        if(post.likes.filter(like=> like.user.toString()=== req.user.id).length>0){
            return res.status(400).json({msg:'post alreadyliked'});
        }
        post.likes.unshift({user:req.user.id}); //add the user on the beginnig
        await post.save();
        res.status(200).json(post.likes);
    } catch (error) {
        console.log(error);
    res.status(500).json({ errors: error });
    }
};

//UNLIKE A POST
exports.unlike = async (req,res) => {
    try {
        const post = await ProfilPerson.findById(req.params.id);
        if(post.likes.filter(like=> like.user.toString() === req.user.id).length >0) {
            post.likes = post.likes.filter(like=> like.user.toString() !== req.user.id);
            await post.save();
            res.status(200).json(post.likes);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ errors: error });
    }
};

//LIKE AN OFFRE
exports.likeOffre = async (req,res) => {
    try {
        const offre = await Offres.findById(req.params.id);
        if(offre.likes.filter(like=> like.user.toString()===req.user.id).length>0) {
            return res.status(400).json({msg:'ofrre already liked'});
        }
        offre.likes.unshift({user: req.user.id});
        await offre.save();
        res.status(200).json(offre.likes);
    } catch (error) {
        console.log(error);
        res.status(500).json({errors: error});
    }
};

//UNLIKE OFFRE 
exports.unlikeOffre = async (req,res) => {
    try {
        const offre = await Offres.findById(req.params.id);
        if(offre.likes.filter(like=> like.user.toString() === req.user.id).length >0) {
            offre.likes = offre.likes.filter(like=> like.user.toString() !== req.user.id);
            await offre.save();
            res.status(200).json(offre.likes);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ errors: error });
    }
};