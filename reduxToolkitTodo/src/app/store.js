// configure store RTK
import { configureStore } from "@reduxjs/toolkit";
// todo reducer get
import todoReducer from "../features/todo/todoSlice";

// variable export
export const store = configureStore({
  reducer: todoReducer,
});
