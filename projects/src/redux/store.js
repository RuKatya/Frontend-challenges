import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoApp/todoSlice';

export const store = configureStore({
    reducer: {
        todo: todoReducer,
    },
});
