// src/features/tasks/tasksSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { tasks } from '../../data/tasks';

// Асинхронное действие для загрузки задач
export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  // Имитация асинхронного запроса с помощью setTimeout
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(tasks);
    }, 1000); // Задержка в 1 секунду
  });
});

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    items: [],
    status: 'idle', // idle | loading | succeeded | failed
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default tasksSlice.reducer;
