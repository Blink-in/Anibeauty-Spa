const mongoose = require("mongoose");
const LoginSchema = mongoose.Schema(
  {


    email: {
      type: String,
      required: true,
    },

    password: {
      type: String,
      required: true,
    },
  },
  {
    Timestamps: false,
  }
);

const Login = mongoose.model("Login", LoginSchema);
module.exports = Login;
