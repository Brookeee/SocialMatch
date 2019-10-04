const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://project3user:asdf1234@ds229078.mlab.com:29078/heroku_964h5x81",
  {
    useCreateIndex: true,
    useNewUrlParser: true
  }
);

app.listen(PORT, () => console.log(`Server running on port ${PORT}!`));
