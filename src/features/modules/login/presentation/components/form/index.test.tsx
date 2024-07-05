import { fireEvent, render } from "@testing-library/react";
import { describe, it } from "vitest";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import FormLogin from "./index";
import { store } from "../../../../../../store";

describe("FormLogin", () => {
	it("add todo", () => {
		const component = render(
			<Provider store={store}>
				<FormLogin />
			</Provider>,
			{ wrapper: MemoryRouter }
		);
		const input = component.getByTestId("todo-name");
		fireEvent.change(input, {
			target: {
				value: "Todo",
			},
		});
		const btn = component.getByTestId("add-btn");
		fireEvent.click(btn);
	});

	it("delete todo", () => {
		console.log("store", store.getState().todo);
		const component = render(
			<Provider store={store}>
				<FormLogin />
			</Provider>,
			{ wrapper: MemoryRouter }
		);

		const btn = component.getByTestId("delete-btn");
		fireEvent.click(btn);
	});
});
