const mongoose = require("mongoose");
const { ObjectId } = require("mongodb");
const User = mongoose.model("User");

var path = require("path");


module.exports.store_user_answer = async (req, res, next) => {
  console.log(req.body);
  const user_answer = await new User({
    name: req.body.name,
    user_answer: req.body.user_answer,
  }).save((data, err) => {
    console.log(data);
    if (data) {
      return res.status(200).json({
        status: {
          code: 0,
          message: "Your answer added successfully...",
        },
      });
    } else {
      return res.status(200).json({
        status: {
          code: 1,
          message: err.message,
        },
      });
    }
  });
};

module.exports.store_friends_details = async (req, res, next) => {
  var answer = null;
  await User.findById(req.params.user_id).then((data, err) => {
    if (data) {
      answer = data.user_answer;
    }
  });
  var points = 0;
  for (let i = 1; i <= 10; i++) {
    if (answer[i] == req.body.friends_details.friends_answer[i]) {
      points++;
    }
  }
  await User.findByIdAndUpdate(req.params.user_id, {
    $set: {
      friends_details: {
        points: points,
        name: req.body.friends_details.name,
        friends_answer: req.body.friends_details.friends_answer,
      },
    },
  }).then((data, err) => {
    if (data) {
      return res.status(200).json({
        status: {
          code: 0,
          message: "Your answer added successfully...",
        },
      });
    } else {
      return res.status(200).json({
        status: {
          code: 1,
          message: "Your answer failed to add...",
        },
      });
    }
  });
};
