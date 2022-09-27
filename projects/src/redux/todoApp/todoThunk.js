import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";

export const getAllTasksAsync = createAsyncThunk(
    'todo/getAllTasks',
    async () => {
        const { data } = await axios.get("/todo/get-task");

        return data;
    }
);

export const addNewTaskAsync = createAsyncThunk(
    'todo/addNewTask',
    async ({ task, done }) => {
        const { data } = await axios.post("/todo/save-task", { task, done });

        const { newTask } = data
        return newTask;
    }
)

export const toggleDoneTask = createAsyncThunk(
    'todo/toggleDoneTask',
    async ({ id, done }) => {
        const { data } = await axios.post("/todo/change-if-done", { id, done });

        const { tasks } = data
        return tasks

        // const { taskId, taskDone } = data
        // return { taskId, taskDone };
    }
)

export const deleteAllDoneTasks = createAsyncThunk(
    'todo/deleteAllDoneTasks',
    async ({ deleteTaskIds }) => {
        const { data } = await axios.post("/todo/delete-all-done", { deleteTaskIds });

        return data
    }
)