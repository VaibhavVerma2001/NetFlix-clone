const router = require("express").Router();
const Movie = require("../db/movie");
const verify = require("../verifyToken");


// Create new movie
router.post('/create', verify, async (req, res) => {
    if (req.user.isAdmin) {
        try {
            const newMovie = new Movie(req.body);
            const savedMovie = await newMovie.save();
            res.status(200).json(savedMovie);
        } catch (err) {
            // title is required and unique so it can also give error
            console.log(err);
            res.status(500).json(err);
        }
    }
    else {
        res.status(403).json("You are not allowed to create movie!")
    }
});



// Update new movie if admin
router.put('/update/:id', verify, async (req, res) => {
    if (req.user.isAdmin) {
        try {
            const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
            res.status(200).json(updatedMovie);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }
    else {
        res.status(403).json("You are not allowed to create movie!")
    }
});


// Delete new movie when admin
router.delete('/delete/:id', verify, async (req, res) => {
    if (req.user.isAdmin) {
        try {
            await Movie.deleteOne({ _id: req.params.id });
            res.status(200).json("The movie has been deleted!");
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }
    else {
        res.status(403).json("You are not allowed to delete movie!")
    }
});


// Get movie even if not admin 
router.get('/find/:id', verify, async (req, res) => {
    try {
        const foundMovie = await Movie.findById(req.params.id);
        res.status(200).json(foundMovie);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


// Get random movie for featured page even if not admin 
// random movie for movie and series for series, if no type given then movies 
router.get('/random', verify, async (req, res) => {
    const type = req.query.type;
    let movie;
    try {
        // get random series
        if (type === "series") {
            movie = await Movie.aggregate([
                { $match: { isSeries: true } }, //find all series
                { $sample: { size: 1 } }, // gives just 1 sample
            ]);
        } else {
            movie = await Movie.aggregate([
                { $match: { isSeries: false } },
                { $sample: { size: 1 } },
            ]);
        }
        res.status(200).json(movie);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});



// get all movie when admin
router.get('/findall', verify, async (req, res) => {
    if (req.user.isAdmin) {
        try {
            const movies = await Movie.find();
            res.status(200).json(movies.reverse()); //latest movies 1st
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }
    else {
        res.status(403).json("You are not allowed to get all movie!")
    }
});



module.exports = router;