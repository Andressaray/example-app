import { it, describe, expect } from "vitest";
import { configureStore } from "@reduxjs/toolkit";
import { todo } from "../../../features/core/mock/todo";
import todoReducer, { addTodo, deleteTodo, updateTodo } from ".";

describe("todoSlice", () => {
	it("should add todo to state", () => {
		const store = configureStore({
			reducer: {
				todos: todoReducer,
			},
		});

		store.dispatch(addTodo(todo));

		const state = store.getState().todos;
		expect(state.todos.length).toBe(1);
		expect(state.todos[0]).toEqual(todo);
	});

	it("should add delete to state", () => {
		const store = configureStore({
			reducer: {
				todos: todoReducer,
			},
		});

		store.dispatch(deleteTodo([todo]));

		const state = store.getState().todos;
		expect(state.todos.length).toBe(1);
		expect(state.todos[0]).toEqual(todo);
	});

	it("should add updateTodo to state", () => {
		const store = configureStore({
			reducer: {
				todos: todoReducer,
			},
		});

		store.dispatch(updateTodo([todo]));

		const state = store.getState().todos;
		expect(state.todos.length).toBe(1);
		expect(state.todos[0]).toEqual(todo);
	});
});
