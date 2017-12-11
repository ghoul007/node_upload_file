var express = require("express");
var router = express.Router();

var users = [
  {id:1, name: "ahmed", age: 28, image: "" },
  {id:2, name: "ismail", age: 35, image: "" },
  {id:3, name: "aymen", age: 30, image: "" }
];

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send({users});
});
/* GET users listing. */
router.get("/:id", function(req, res, next) {
  res.send(users.find(res=> res.id == req.params.id));
});

module.exports = router;
