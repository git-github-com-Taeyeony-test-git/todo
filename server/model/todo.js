const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({
    todo: {
        type: String,
        requireed: true,
    }
});

const Todo = mongoose.model("Todo",todoSchema)

module.exports = { Todo };