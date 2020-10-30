const express = require("express");

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const sessions = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const path = require("path");
const app = express();

const routes = require("./routes");
const cors = require("cors");
const db = require("./db")

app.use(cors());

const User = require("./models/Users");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api",routes)

app.use(cookieParser())


app.use(
    sessions({ 
        secret: "bootcamp",
        resave: true,
        saveUninitialized: true,
 }))


app.use(passport.initialize());
app.use(passport.session());



passport.use(
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
      },
      function (email, password, done) {
        User.findOne({where:{ email }})
          .then((user) => {
            if (!user) {
              return done(null, false); 
            }
            user.hash(password, user.salt).then((hash) => {
              if (hash !== user.password) {
                return done(null, false); 
              }
              done(null, user); 
            });
          })
          .catch(done);
      }
    )
  );


  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  
  passport.deserializeUser(function(id, done) {
    User.findByPk(id)
      .then(user => done(null, user))
  });



db.sync()
    .then(()=> app.listen(3030, ()=>{
        console.log("listening to port 3030")
    }))
  

