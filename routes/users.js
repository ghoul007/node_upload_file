var express = require("express");
var router = express.Router();
var uuid = require("uuid/v4");

var users = [
  { id: 1, name: "ahmed", age: 28, image: "" },
  { id: 2, name: "ismail", age: 35, image: "" },
  { id: 3, name: "aymen", age: 30, image: "" }
];

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send({ users });
});
/* GET users listing. */
router.get("/:id", function(req, res, next) {
  res.send(users.find(res => res.id == req.params.id));
});

router.post("/create", function(req, res, next) {
  user = req.body;
  user.id = uuid();
  users.push(user);
  res.send(user);
});

router.delete("/:id", function(req, res, next) {
  var obj = users.find(res => res.id == req.params.id);
  var index = users.indexOf(obj);
  users.splice(index, 1);
  res.send(users);
});

module.exports = router;
