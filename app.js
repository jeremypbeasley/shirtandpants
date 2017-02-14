const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('public'));
app.set('view engine', 'ejs');
var _ = require("lodash");
// var getJSON = require('get-json');

// render the app

app.get("/", (req, res) =>
  res.render("index.ejs"));
  console.log('Listening at http://localhost:7000/')

app.listen(process.env.PORT || 7000);
