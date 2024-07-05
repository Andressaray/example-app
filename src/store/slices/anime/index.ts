import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { AnimeState } from "./type";
import { Anime } from "../../../types/anime";

const initialState: AnimeState = {
	animes: [],
};

export const animeSlice = createSlice({
	name: "animes",
	initialState,
	reducers: {
		deleteAnime: (state, action: PayloadAction<Anime[]>) => {
			state.animes = action.payload;
		},
		addAnimes: (state, action: PayloadAction<Anime[]>) => {
			state.animes = action.payload;
		},
	},
});

export const { addAnimes, deleteAnime } = animeSlice.actions;

export default animeSlice.reducer;
