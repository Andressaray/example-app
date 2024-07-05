import { describe, test } from "vitest";
import { render } from "@testing-library/react";

import AppRoot from "./index";
import { Provider } from "react-redux";
import { store } from "../store";

describe("AppRoot", () => {
	test("Render AppRoot", () => {
		render(
			<Provider store={store}>
				<AppRoot />
			</Provider>
		);
	});
});
