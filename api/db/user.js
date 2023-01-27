const mongoose = require("mongoose");
require('dotenv').config();


mongoose.set('strictQuery', false);
const url = process.env.MONGO_URL;
mongoose.connect(url);

mongoose.connection
    .once('open', function () {
        console.log('Successfully connected to Database User collection ...');
    })
    .on('error', function (err) {
        console.log(err);
    });


const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profilePic: { type: String, defaut: "" },
    isAdmin: { type: Boolean, default: false },
},
    // to store time by default
    { timestamps: true }
);



const User = new mongoose.model("User", userSchema);


module.exports = User;