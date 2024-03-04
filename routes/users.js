const router = require("express").Router();

const { users } = require("./add-user");

router.get("/users", (req, res) => {
  res.render("users", { pageTitle: "All  Users", users, path: "/users" });
});

module.exports = router;
