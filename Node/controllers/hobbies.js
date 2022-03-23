const {body, validationResult} = require('express-validator');
const Hobby = require('../models/hobbies');
function getHobbies(req, res) {
  Hobby.find((err, hobbies_list) => {
    if (err) {
      res.json(err);
    } else {
      res.json(hobbies_list);
    }
  });
}

const createHobby = [
  body('name')
    .trim()
    .isLength({min: 3, max: 50})
    .withMessage('Min sholud be 3 and Max length to be 50')
    .escape()
    .isAlpha()
    .withMessage('Only alphabets are allowed. No special characters allowed'),
  body('description')
    .trim()
    .isLength({min: 10, max: 500})
    .withMessage('In range of 10 and 500 characters'),
  (req, res) => {
    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
      res.json({status: 0, debug_data: errors});
    } else {
      console.log(req.body);
      let {name, description, date_of_creation} = req.body;
      let hobbyObject = new Hobby({name, description, date_of_creation});
      hobbyObject.save((error) => {
        if (error) {
          res.json(error);
        } else {
          res.json({status: 'Adding Hobby completed'});
        }
      });
    }
  },
];

function deleteHobby(req, res) {
  Hobby.findByIdAndDelete(req.params._id, function (err) {
    if (err) {
      res.json(error);
    } else {
      res.json(`Hobby with _id as ${req.params._id} is removed`);
    }
  });
}

module.exports = {getHobbies, createHobby, deleteHobby};
