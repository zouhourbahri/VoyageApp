const express = require("express");
const multer = require("multer");
const { register, login } = require("../controllers/user.controller");
const {
  registerRules,
  validator,
  loginRules,
  postRules,
} = require("../middleware/validator");
const isAuth = require("../middleware/passport-setup");
const {
  publish,
  getAll,
  getUserPosts,
  deleteUserPost,
  deleteUserPosts,
  like,
  getAgences,
  getOffres,
  agenceOffres,
  notateAgence,
  likeOffre,
  unlike,
  unlikeOffre,
} = require("../controllers/posts.controller");
const {
  getAllUserInfos,
  addAdmin,
  banUser,
  deleteUser,
  getAllAgencesInfos,
  banAgence,
  deleteAgence,
} = require("../controllers/admin.controller");
const adminAccess = require("../middleware/adminAccess");
const Router = express.Router();

//Initializing multer Storage
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

//Filter Uploaded file , it must be a picture
var fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true); // accept the file and store it
  } else {
    cb(null, false); // accept the file but don't store it
  }
};
var upload = multer({
  storage: storage,
  // fileFilter: fileFilter,
});

//************* Definig All the Routes ********************/

// Register /
// Path /registeruser
// Public
Router.post("/registeruser", registerRules(), validator, register);

// Login /
// Path /loginuser
// Public
Router.post("/loginuser", loginRules(), validator, login);

// ********* Users CRUD ****** //

// GET A USER /
// Path /currentuser
// Private
Router.get("/currentuser", isAuth(), (req, res) => res.json(req.user));

// ProfilPerson ADD A POST /
// Path /currentuser
// Private
Router.post("/currentuser", [isAuth(), upload.single("dirImage")], publish);
// Router.post("/currentuser", [isAuth(),upload.array('dirImage',10)], publish);

// ProfilPerson GET ALL POSTS /
//  Path /currentuser/posts
// Private
Router.get("/currentuser/posts", isAuth(), getAll);

//GET ALL AGENCES FOR USER
//PATH /currentuser/agences
Router.get("/currentuser/agences", isAuth(), getAgences);

//GET ALL OFFRES FOR USER
//PATH /currentuser/agences/offres
Router.get("/currentuser/agences/offres", isAuth(), getOffres);

//GET ALL OFFRES OF ONE AGENCE FOR USER
//PATH /currentuser/agences/offres/:agence
Router.get("/currentuser/agences/offres/:agence", isAuth(), agenceOffres);

// ProfilPerson GET ALL POSTS OF ONE USER /
//  Path /currentuser/posts/:user
// Private
Router.get("/currentuser/posts/:user", isAuth(), getUserPosts);

// DELETE A POST OF ONE USER BY ID /
//  Path /currentuser/posts/:id
//  Private
Router.delete("/currentuser/posts/:id", isAuth(), deleteUserPost);

// DELETE ALL POSTS OF ONE USER /
// Router.delete("/current/posts/:user", isAuth(), deleteUserPosts);

//NOTATE AGENCE
Router.put("/currentuser/agences/:id/:rate", isAuth(), notateAgence);

// LIKE A POST && AN OFFRE BY ID/
Router.put("/currentuser/posts/like/:id", isAuth(), like);
Router.put("/currentuser/offres/like/:id", isAuth(), likeOffre);

// UNLIKE A POST && AN OFFRE BY ID/
Router.put("/currentuser/posts/unlike/:id", isAuth(), unlike);
Router.put("/currentuser/offres/unlike/:id", isAuth(), unlikeOffre);

// ********** ADMIN CRUD ******//

//GET ALL USERS && ALL AGENCES
Router.get("/admin/allUsers", isAuth(), getAllUserInfos);
Router.get("/admin/allAgences", isAuth(), getAllAgencesInfos);

//ADD AN ADMIN
Router.patch("/admin/addAdmin/:id", isAuth(), addAdmin);

//BAN A USER && AN AGENCE
Router.patch("/admin/banUser/:id", [isAuth(), adminAccess], banUser);
Router.patch("/admin/banAgence/:id", [isAuth(), adminAccess], banAgence);

//DELETE A USER && AN AGENCE
Router.delete("/admin/deleteUser/:id", [isAuth(), adminAccess], deleteUser);
Router.delete("/admin/deleteAgence/:id", [isAuth(), adminAccess], deleteAgence);

module.exports = Router;
