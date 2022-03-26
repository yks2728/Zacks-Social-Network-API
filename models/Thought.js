const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            minlength: 1,
            maxlength: 280,
            required: "Thought text is required"
        },

        createdAt: {
            type: Date,
            default: Date.now,
            getters: true,
        },

        username: {
            type: String,
            required: 'Username is Required'
        },

        reactions: [reactionSchema],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

ThoughtSchema.virtual('reaction-count').get(function() {
    return this.reactions.length
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;