const mongoose = require("mongoose");

var Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;
var userSchema = new Schema(
  {
    name: {
      type: String,
    },
    user_answer: {
      type: Object,
    },
    friends_details: {
      type: Object,
    },
  },
  {
    versionKey: false, // You should be aware of the outcome after set to false
    timestamps: true,
  }
);

mongoose.model("User", userSchema);
