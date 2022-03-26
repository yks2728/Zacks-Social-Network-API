const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },

    reactionBody: {
        type: String,
        maxlength: 280,
        required: 'Reaction Body is Required'
    },

    username: {
        type: String,
        required: 'Username is Required'
    },

    createdAt: {
        type: Date,
        default: Date.now,
        getters: true
    },
});

module.exports = reactionSchema;