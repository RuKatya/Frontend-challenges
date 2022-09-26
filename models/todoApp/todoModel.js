const { Schema, model } = require('mongoose')

const TodoSchema = new Schema({
    task: {
        type: String,
        require
    },
    done: {
        type: Boolean,
        default: false
    }
})

exports.Todo = model("Todo", TodoSchema)