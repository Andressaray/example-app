import { describe, expect, test } from "vitest";
import { renderHook, act, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../../../store";
import useSearchAnime from "./index";

describe("usecases > searchAnime", () => {
	test("Render hooks", async () => {
		const wrapper = ({ children }: { children: React.ReactNode }) => (
			<Provider store={store}>{children}</Provider>
		);

		const { result } = renderHook(() => useSearchAnime(), { wrapper });

		act(() => {
			result.current.setSearch("Dragon ball");
		});

		expect(result.current.isLoading).toBe(false);

		await waitFor(() => expect(result.current.isLoading).toBe(true), {
			timeout: 2000,
		});

		await waitFor(() => expect(result.current.data).not.equal([]), {
			timeout: 2500,
		});
	});

	test("Render hooks", async () => {
		const wrapper = ({ children }: { children: React.ReactNode }) => (
			<Provider store={store}>{children}</Provider>
		);

		const { result } = renderHook(() => useSearchAnime(), { wrapper });

		act(() => {
			result.current.setSearch("");
		});

		expect(result.current.isLoading).toBe(false);

		await waitFor(() => expect(result.current.isLoading).toBe(false), {
			timeout: 2000,
		});
	});
});
