const { check } = require("express-validator");

exports.createTagVlidator = [
  check("name").not().isEmpty().withMessage("Name is Required"),
];
