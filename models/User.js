const { Schema, model } = require("mongoose");
const Thought = require("./Thought");

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

    thoughts: [{type: Schema.Types.ObjectId, ref: 'Thought'}],
    friends: [{type: Schema.Types.ObjectId, ref: 'User'}],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

UserSchema.virtual('friend-count').get(function() {
    return this.friends.length;
});

const User = model('User', UserSchema);

module.exports = User;