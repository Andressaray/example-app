import { describe, test } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";

import Welcome from "./index";
import { Provider } from "react-redux";
import { store } from "../../../../../../store";

describe("Welcome", () => {
	test("Render Welcome", () => {
		render(
			<Provider store={store}>
				<Welcome />
			</Provider>,
			{ wrapper: MemoryRouter }
		);
		userEvent.click(screen.getByText("login"));
	});
});
