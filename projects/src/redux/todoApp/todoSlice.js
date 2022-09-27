import { createSlice } from '@reduxjs/toolkit';
import { addNewTaskAsync, deleteAllDoneTasks, getAllTasksAsync, toggleDoneTask } from './todoThunk';

const initialState = {
    value: [],
    status: 'idle'
};

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllTasksAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getAllTasksAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.value = action.payload;
            })
            .addCase(addNewTaskAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(addNewTaskAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.value = [...state.value, action.payload];
            })
            .addCase(toggleDoneTask.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(toggleDoneTask.fulfilled, (state, action) => {
                state.status = 'idle';
                state.value = action.payload;
                // state.value = state.value.map(item => item.id === action.payload.taskId ? { ...item, done: action.payload.taskDone } : item);
            })
            .addCase(deleteAllDoneTasks.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(deleteAllDoneTasks.fulfilled, (state, action) => {
                state.status = 'idle';
                state.value = action.payload;
            })
    }
})

export const { } = todoSlice.actions

export const selectTodo = (state) => state.todo.value

export default todoSlice.reducer;