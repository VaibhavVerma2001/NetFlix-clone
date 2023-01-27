const mongoose = require("mongoose");
require('dotenv').config();


const url = process.env.MONGO_URL;
mongoose.connect(url);

mongoose.connection
    .once('open', function () {
        console.log('Successfully connected to Database Movie collection ...');
    })
    .on('error', function (err) {
        console.log(err);
    });



const movieSchema = new mongoose.Schema({
    // unique
    title: {
        type: String,
        required: true,
        unique: true
    },
    desc: {
        type: String
    },
    img: {
        type: String,
        default: ""
    },
    imgTitle: {
        type: String
    },
    imgsm: {
        type: String
    },
    trailer: {
        type: String
    },
    video: {
        type: String
    },
    year: {
        type: String
    },
    limit: {
        type: Number
    },
    genre: {
        type: String
    },
    isSeries: {
        type: Boolean,
        default: false
    }
},
    // to store time by default
    { timestamps: true });

const Movie = new mongoose.model("Movie", movieSchema);


module.exports = Movie;