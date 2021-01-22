const express = require("express");
const multer = require("multer");
const {
  registerAgency,
  loginAgency,
} = require("../controllers/agence.controller");
const {
  registerAgencyRules,
  validator,
  loginAgencyRules,
  postOffreRules,
} = require("../middleware/validator");
const isAuth = require("../middleware/passport-setup");
const {
  addOffre,
  getAllOffres,
  deleteOffre,
} = require("../controllers/offre.controller");
const Router = express.Router();


//Initializing multer Storage
const storage = multer.diskStorage({
  destination : function(req, file, cb) {
      cb(null , './uploads/');
  },
  filename: function(req, file, cb) {
      cb(null,file.originalname);
  },
});


//Filter Uploaded file , it must be a picture
const fileFilter = (req, file, cb) => {
  if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      cb(null,true); // accept the file and store it
  } else {
      cb(null, false); // accept the file but don't store it
  }
}
const upload = multer ({
  storage: storage,
  // fileFilter:fileFilter,
  });


//**************DEFINING ALL THE ROUTES*******/

//Register Agency : Path: /registeragence
//Public
Router.post(
  "/registeragence",
  registerAgencyRules(),
  validator,
  registerAgency
);

//Login Agency : Path: /loginagence
//               Public
Router.post("/loginagence", loginAgencyRules(), validator, loginAgency);

//Get An Agency : Path: /profilagence
//                Private
Router.get("/profilagence", isAuth(), (req, res) => {
  console.log(req);
  res.status(200).json(req.user);
});


//Add An Offre : Path: /profilagence/offres
//               Private
Router.post("/profilagence/offres",[isAuth(),upload.single('dirImage')],addOffre
);

//Get All Offres : Path: /profilagence/offres/:agence
//                 Private
Router.get("/profilagence/Offres/:agence", isAuth(), getAllOffres);

//Delete An Offres : Path :/profilagence/offres/:id
//                    Private
Router.delete("/profilagence/offres/:id", isAuth(), deleteOffre);

module.exports = Router;