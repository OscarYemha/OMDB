const express = require("express");
const passport = require("passport");
const User = require("../models/Users");
const router = express.Router();


router.post("/register", (req,res) =>{
    User.create(req.body).then((user)=>{
        res.status(201).send(user)
    });
});

router.post("/", passport.authenticate("local"), (req, res) => {
  res.send(req.user);
  res.redirect('/add' + req.user.username);
});


router.post("/logout", (req, res) => {
    req.logOut();
    res.sendStatus(200);
});



module.exports = router;