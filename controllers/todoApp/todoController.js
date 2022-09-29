const { Todo } = require("../../models/todoApp/todoModel")

exports.getAllTasks = async (req, res) => {
    try {
        const { filter } = req.body

        const tasks = await Todo.find({})

        switch (filter) {
            case "ALL":
                res.send(tasks)
                break;
            case "ACTIVE":
                const active = tasks.filter(i => i.done === false)
                res.send(active)
                break;
            case "COMPLETED":
                const completed = tasks.filter(i => i.done === true)
                res.send(completed)
                break;

            default:
                res.send(tasks)
                break;
        }
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