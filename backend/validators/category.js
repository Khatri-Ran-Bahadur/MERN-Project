const { check } = require("express-validator");

exports.createCategoryVlidator = [
  check("name").not().isEmpty().withMessage("Name is Required"),
];
