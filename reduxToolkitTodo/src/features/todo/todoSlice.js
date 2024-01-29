// nanoid unique id generate
import { createSlice, nanoid } from "@reduxjs/toolkit";

// initial
const initialState = {
  todos: [
    {
      id: 1,
      text: "hello word",
    },
  ],
};
// slice,initial,reducer...state-action
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((i) => i.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
