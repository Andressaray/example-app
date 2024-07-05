import { describe, test } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";

import Login from "./index";
import { Provider } from "react-redux";
import { store } from "../../../../../../store";

describe("Login", () => {
	test("Render Login", () => {
		render(
			<Provider store={store}>
				<Login />
			</Provider>,
			{ wrapper: MemoryRouter }
		);
		userEvent.click(screen.getByText("welcome"));
	});
});
