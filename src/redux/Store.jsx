import { configureStore } from '@reduxjs/toolkit';
import todoSlice from './ReduxSlice';

export const store = configureStore({
    reducer: {
        todo: todoSlice,
    }
})