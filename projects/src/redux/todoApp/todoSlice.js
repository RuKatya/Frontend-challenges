import { createSlice } from '@reduxjs/toolkit';
import { getAllTasksAsync } from './todoThunk';

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
    }
})

export const { } = todoSlice.actions

export const selectTodo = (state) => state.todo.value

export default todoSlice.reducer;