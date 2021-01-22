const mongoose = require("mongoose");

const profilSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  direction: {
    type: String,
  },
  year: {
    type: Number,
  },
  description: {
    type: String,
  },
  dirImage: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  likes: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        reference: "users",
      },
    },
  ],
});

module.exports = ProfilPerson = mongoose.model("profilPerson", profilSchema);
