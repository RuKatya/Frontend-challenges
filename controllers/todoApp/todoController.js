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
        res.send({ newTask, ok: true })
    } catch (error) {
        console.log(error)
        res.send(error)
    }
}

exports.changeIfDone = async (req, res) => {
    try {
        const { id, done } = req.body

        await Todo.findByIdAndUpdate(id, { done })

        const tasks = await Todo.find({})

        res.send({ tasks })

        // res.send({ taskId: id, taskDone: done })
    } catch (error) {
        console.log(error)
        res.send(error)
    }
}

exports.deleteOneTask = async (req, res) => {
    try {
        const { id } = req.body
        await Todo.findByIdAndDelete(id)

        const tasks = await Todo.find({})

        res.send(tasks)
    } catch (error) {
        console.log(error)
        res.send(error)
    }
}
exports.deleteAllDone = async (req, res) => {
    try {
        const { deleteTaskIds } = req.body
        const deletedTasks = await Todo.deleteMany({ "_id": { $in: deleteTaskIds } })

        if (deletedTasks.acknowledged) {
            const tasks = await Todo.find({})
            res.send(tasks)
        }
    } catch (error) {
        console.log(error)
        res.send(error)
    }
}