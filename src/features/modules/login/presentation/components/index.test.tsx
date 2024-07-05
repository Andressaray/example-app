import { render } from "@testing-library/react";
import { describe, it } from "vitest";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { FormLogin } from "./index";
import { store } from "../../../../../store";

describe("components login", () => {
	it("render", () => {
		render(
			<Provider store={store}>
				<FormLogin />
			</Provider>,
			{ wrapper: MemoryRouter }
		);
	});
});
