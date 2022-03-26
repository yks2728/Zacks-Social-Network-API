const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      trim: true,
      required: "Username is Required",
    },

    email: {
      type: String,
      unique: true,
      match: [/.+@.+\..+/],
      required: "Email is Required",
    },

    thoughts: [],
    friends: [],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

UserSchema.virtual('friend-count').get(function() {
    return this.friendCount.slice(0, this.friendCount.indexOf('[]'));
});

const User = model('User', UserSchema);

module.exports = User;