import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import AppRoot from "./router";
import "./index.css";
import { store } from "./store";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Provider store={store}>
			<AppRoot />
		</Provider>
	</React.StrictMode>
);
