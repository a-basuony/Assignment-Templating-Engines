const router = require("express").Router();

const users = [];

router.get("/", (req, res) => {
  res.render("index", { pageTitle: "Add New User", path: "/" });
});

router.post("/", (req, res) => {
  const { name, email } = req.body;
  console.log(name, email);
  if (name) {
    users.push({ name, email });
  }
  console.log(users);
  res.redirect("/users");
});

module.exports = {
  router,
  users,
};
