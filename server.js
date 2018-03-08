var methodOverride = require('method-override')
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");


var PORT = process.env.PORT || 3000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + "/public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride('_method'));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));

app.set("view engine", "handlebars");

var routes = require("./controllers/burger_controller.js");
app.use('/',routes);

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});
