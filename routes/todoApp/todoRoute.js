const { Router } = require('express')
const router = Router()
const { getAllTasks, addNewTask, changeIfDone, deleteAllDone } = require('../../controllers/todoApp/todoController')

router
    .get('/get-task', getAllTasks)
    .post('/save-task', addNewTask)
    .post('/change-if-done', changeIfDone)
    .post('/delete-all-done', deleteAllDone)

module.exports = router