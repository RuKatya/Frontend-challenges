import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";

export const getAllTasksAsync = createAsyncThunk(
    'todo/getAllTasks',
    async () => {
        const { data } = await axios.get("/todo/get-task");
        // console.log(data)
        return data;
    }
);