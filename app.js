const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();

const port = 3000;
//  body parser
// app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
//  static file serving
app.use(express.static(path.join(__dirname, "public")));

// using Ejs as a template engine
app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/add-user");
const usersRoutes = require("./routes/users");

app.use(adminRoutes.router);
app.use(usersRoutes);

app.use("*", (req, res) => {
  res.render("404", { pageTitle: "Page Not Found", path: req.path });
});

app.listen(port, () => {
  console.log("iam listening on port", port);
});
