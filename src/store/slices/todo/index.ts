import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { TodoState } from "./type";
import { Todo } from "../../../types/todo";

const initialState: TodoState = {
	todos: [],
};

export const todoSlice = createSlice({
	name: "todos",
	initialState,
	reducers: {
		deleteTodo: (state, action: PayloadAction<Todo[]>) => {
			state.todos = action.payload;
		},
		addTodo: (state, action: PayloadAction<Todo>) => {
			state.todos.push(action.payload);
		},
		updateTodo: (state, action: PayloadAction<Todo[]>) => {
			state.todos = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
