import { describe, test } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../../../store";
import useAddTodo from "./index";
import { todo } from "../../../../core/mock/todo";

describe("useAddTodo", () => {
	test("Render hooks", async () => {
		const wrapper = ({ children }: { children: React.ReactNode }) => (
			<Provider store={store}>{children}</Provider>
		);

		const { result } = renderHook(() => useAddTodo(), { wrapper });

		act(() => {
			result.current.handleAddTodo(todo);
		});
	});
});
