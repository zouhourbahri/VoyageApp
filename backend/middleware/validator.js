const { check, validationResult } = require("express-validator");


exports.registerRules = () => [
  check(`name`, `This field is required !`).notEmpty(),
  check(`email`, `This is not a valid email address ! `).isEmail(),
  check(`email`, `This field is required !`).notEmpty(),
  check(
    `password`,
    `The length of this field should be at least 4 characters!`
  ).isLength({ min: 5 }),
];


exports.registerAgencyRules = () => [
  check(`name`, `This field is required !!`).notEmpty(),
  check(`email`, `This field is required !!`).notEmpty(),
  check(`email`, `This not a valid email !!`).isEmail(),
  check(`password`,`This field is required!!`).notEmpty(),
  check(`phoneNumber`, `This field is required !!`).notEmpty(),
]


exports.loginRules = () => [
  check(`email`, `This is not a valid email address ! `).isEmail(),
  check(`email`, `This field is required !`).notEmpty(),
  check(
    `password`,
    `The length of this field should be at least 4 characters!`
  ).isLength({ min: 5 }),
  check(`password`, `This field is required !`).notEmpty(),
];


exports.loginAgencyRules = () => [
  check(`email`, `This is not a valid email address ! `).isEmail(),
  check(`email`, `This field is required !`).notEmpty(),
  check(`password`, `This field is required !`).notEmpty(),
]


exports.postRules = () => [
  check(`direction`, `This field is required !`).notEmpty(),
  check(`year`, `This field is required !`).notEmpty(),
  check(`year`, `Please type a valid year !`).isNumeric(),
  check(`description`, `This field is required !`).notEmpty(),
];


exports.postOffreRules = () =>[
check(`direction`, `This field is required !`).notEmpty(),
check(`départ`, `This field is required !`).notEmpty(),
check(`arrivée`, `This field is required !`).notEmpty(),
check(`price`, `This field is required !`).notEmpty(),
check(`price`, `This field must be a number !`).isNumeric(),
check(`date`, `This field is required !`).notEmpty(),
]


exports.validator = (req, res, next) => {
  console.log('req.body', req.body);
  const errors = validationResult(req);
  errors.isEmpty() ? next() : res.status(400).json({ errors: errors.array() });
};
