const { Todo } = require("../../models/todoApp/todoModel")

exports.getAllTasks = async (req, res) => {
    try {
        const tasks = await Todo.find({})
        res.send(tasks)
    } catch (error) {
        console.log(error)
        res.send(error)
    }
}

exports.addNewTask = async (req, res) => {
    try {
        const { task, done } = req.body
        const newTask = new Todo({
            task, done
        })

        await newTask.save()
        res.send('saved')
    } catch (error) {
        console.log(error)
        res.send(error)
    }
}

exports.changeIfDone = async (req, res) => {
    try {
        const { id, done } = req.body
        const task = await Todo.findByIdAndUpdate(id, { done })
        res.send(task)
    } catch (error) {
        console.log(error)
        res.send(error)
    }
}

exports.deleteAllDone = async (req, res) => {
    try {
        const { deleteTaskId } = req.body
        console.log(deleteTaskId)
        const deletedTasks = await Todo.deleteMany({ "_id": { $in: deleteTaskId } })

        console.log(deletedTasks)
    } catch (error) {
        console.log(error)
        res.send(error)
    }
}