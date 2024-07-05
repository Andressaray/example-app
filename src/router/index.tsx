import { MemoryRouter, Route, Routes } from "react-router-dom";
import { Login, Welcome } from "../features/modules";

const AppRoot = () => {
	return (
		<MemoryRouter initialEntries={["/"]}>
			<Routes>
				<Route path="/" element={<Welcome />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</MemoryRouter>
	);
};

export default AppRoot;
