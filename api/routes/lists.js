const router = require("express").Router();
const List = require("../db/list");
const verify = require("../verifyToken");


//Create if admin
router.post('/create', verify, async (req, res) => {
    if (req.user.isAdmin) {
        try {
            const newList = new List(req.body);
            const savedList = await newList.save();
            res.status(200).json(savedList);
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



// Delete List id admin
router.delete('/delete/:id', verify, async (req, res) => {
    if (req.user.isAdmin) {
        try {
          await List.findByIdAndDelete(req.params.id);
          res.status(201).json("The list has been delete...");
        } catch (err) {
          res.status(500).json(err);
        }
      } else {
        res.status(403).json("You are not allowed!");
      }
});





// Get list for example on home page we get 10 lists, when we click on series we get 10 series lists
// no need of admin  -- /api/lists/find?type=series&genre=Horror
router.get('/find', verify, async (req, res) => {
    try {
        //1 - for home page show 10 lists either series or movies
        //2 - for series page show 10 series lists
        //3 - for movies page show 10 movies lists
        // ** also there is genre when we click on either series or movies
        const typeQuery = req.query.type;
        const genreQuery = req.query.genre;
        let list = [];
        if (typeQuery) {
            // 1
            if (genreQuery) {
                list = await List.aggregate([
                    { $sample: { size: 10 } },
                    { $match: { type: typeQuery, genre: genreQuery } },
                ]);
                // 2
            } else {
                list = await List.aggregate([
                    { $sample: { size: 10 } },
                    { $match: { type: typeQuery } },
                ]);
            }
            // 3
        } else {
            list = await List.aggregate([{ $sample: { size: 10 } }]);
        }
        res.status(200).json(list);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});





module.exports = router;