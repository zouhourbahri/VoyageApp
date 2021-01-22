const express = require("express");
const user = require('./Routes/user');
const agence = require("./Routes/agence");
const connectDb = require('./config/connectDB');
const Offres = require("./models/Offres");
const Agence = require("./models/Agence");
const app = express(); //instantiation des methodes de express
app.use('/uploads', express.static('uploads'));
app.use(express.json());
app.use('/agence',agence);
app.use('/user', user);
connectDb();
const PORT = process.env.PORT || 4000;


// CRUD FOR Home Page
app.get('/offres', async (req,res) => {
  try {
      const allOffres = await Offres.find().populate('agence', ['name']);
      res.status(200).json(allOffres);
  } catch (error) {
      res.status(500).json({errors:error});
  }
  });

  app.get('/home', async (req,res) => {
    try {
        const allAgences = await Agence.find();
        res.status(200).json(allAgences);
    } catch (error) {
        res.status(500).json({errors:error});
    }
    });
  
//start listening to the server 
app.listen(PORT, (err) =>
  err ? console.log(err) : console.log(`server is running on localhost:${PORT}`)
);
