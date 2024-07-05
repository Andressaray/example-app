import { it, describe, expect } from "vitest";
import { configureStore } from "@reduxjs/toolkit";
import { anime } from "../../../features/core/mock/anime";
import animeReducer, { addAnimes, deleteAnime } from ".";

describe("animeSlice", () => {
	it("should add anime to state", () => {
		const store = configureStore({
			reducer: {
				animes: animeReducer,
			},
		});

		store.dispatch(addAnimes([anime]));

		const state = store.getState().animes;
		expect(state.animes.length).toBe(1);
		expect(state.animes[0]).toEqual(anime);
	});

	it("should delete anime to state", () => {
		const store = configureStore({
			reducer: {
				animes: animeReducer,
			},
		});

		store.dispatch(deleteAnime([]));

		const state = store.getState().animes;
		expect(state.animes.length).toBe(0);
		expect(state.animes).toEqual([]);
	});
});
