const mongoose = require('mongoose');

const agenceSchema = mongoose.Schema({
    agence: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "agence",
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },
    direction: {
        type: String,
    },
    départ: {
        type: String,
    },
    arrivée: {
        type: String,
    },
    date: {
        type: String,
    },
    price: {
        type: Number,
    },
    dirImage: {
        type: String,
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

module.exports = Offres = mongoose.model("offres",agenceSchema);