const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// const passport = require('passport');

const users = require('./models/user');
const rate = require('./models/rating');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const db = require("./src/config/keys").mongoURI;

mongoose.connect(db, {useNewUrlParser: true}).then(() => console.log("MongDB connected")).catch(err => console.log(err));

// app.use(passport.initialize());
// //Passport 
// require("./config/passport")(passport);

// Routes
app.use('/api/user', users);
app.use("/api/rate", rate);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}!`));