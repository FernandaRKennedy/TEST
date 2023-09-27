const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const AccountSchema = new mongoose.Schema({
  userName: {
    type: String,
    allowNull: false,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    allowNull: false,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    allowNull: false,
    required: true,
  },
  email: {
    type: String,
    allowNull: false,
    unique: true,
  },
  profilePicture: {
    type: String,
    default:
      "https://upload.wikimedia.org/wikipedia/commons/b/b5/Windows_10_Default_Profile_Picture.svg",
  },
});
AccountSchema.pre("save", function (next) {
  const user = this;

  if (this.isModified("password") || this.isNew) {
    bcrypt.genSalt(10, function (saltError, salt) {
      if (saltError) {
        return next(saltError);
      } else {
        bcrypt.hash(user.password, salt, function (hashError, hash) {
          if (hashError) {
            return next(hashError);
          }

          user.password = hash;
          next();
        });
      }
    });
  } else {
    return next();
  }
});

AccountSchema.methods.comparePassword = function (password, callback) {
  bcrypt.compare(password, this.password, function (error, isMatch) {
    if (error) {
      return callback(error);
    } else {
      callback(null, isMatch);
    }
  });
};
module.exports = mongoose.model("Account", AccountSchema);
