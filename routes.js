const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const { mongourl } = require("./config/keys");
const Wish = require("./models/wish");

//Connect to mongo Atles and some arguments *****
mongoose.connect(mongourl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

//Get method ***
router.get("/data", (req, res) => {
  Wish.find({})
    .then((data) => {
       console.log(data);
       res.send(data);
    })
    .catch((error) => console.log(error));
});


//post mehtod
router.post("/sent", (req, res) => {
 
  if (req.body.wish !== "" || null) {
  
  //Make a new item to instance of Wish *******
    const Item = new Wish({
      wish: req.body.wish,
    });

  //Save into the datebase  ****
    Item.save()
      .then((data) => {
          console.log("Database saved")
          res.send(data)
        })
      .catch((error) => console.log(error));
  }
});

//Delete MEthod
router.delete("/remove/:id", (req, res) => {
 //Delete into the databse with wish 
 
 Wish.findOneAndRemove({ _id: req.params.id })
    .then((data) => {
      console.log(data)
      res.send(data);
    })
    .catch((error) => console.log(error));
});

module.exports = router;
