const mongoose = require("mongoose");
require('dotenv').config();


const url = process.env.MONGO_URL;
mongoose.connect(url);

mongoose.connection
    .once('open', function () {
        console.log('Successfully connected to Database Category collection ...');
    })
    .on('error', function (err) {
        console.log(err);
});



const listSchema = new mongoose.Schema({
    title :{
        type :String,
        required :true,
        unique :true
    },
    // movie or series
    type :{
        type:String
    },
    genre :{
        type:String
    },
    content:{
        type:Array
    }
}, 
// to store time by default
{timestamps : true} );

const List = new mongoose.model("List", listSchema);


module.exports = List;