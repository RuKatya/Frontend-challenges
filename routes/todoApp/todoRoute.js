const { Router } = require('express')
const router = Router()
const { getAllTasks, addNewTask, changeIfDone, deleteAllDone, deleteOneTask } = require('../../controllers/todoApp/todoController')

router
    .post('/get-task', getAllTasks)
    .post('/save-task', addNewTask)
    .post('/change-if-done', changeIfDone)
    .post('/delete-all-done', deleteAllDone)
    .delete('/delete-task', deleteOneTask)

module.exports = router