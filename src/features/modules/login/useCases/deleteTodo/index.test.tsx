import { describe, test } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../../../store";
import useDeleteTodo from "./index";

describe("useDeleteTodo", () => {
	test("Render hooks", async () => {
		const wrapper = ({ children }: { children: React.ReactNode }) => (
			<Provider store={store}>{children}</Provider>
		);

		const { result } = renderHook(() => useDeleteTodo(), { wrapper });

		act(() => {
			result.current.handleDeleteTodo("1");
		});
	});
});
