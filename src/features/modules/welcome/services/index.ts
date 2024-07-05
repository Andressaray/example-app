import { createApi } from "@reduxjs/toolkit/query/react";
import { Anime } from "../../../../types/anime";
import baseQuery from "../../../core/api";

export const animesApi = createApi({
	reducerPath: "animesApi",
	baseQuery,
	endpoints: (build) => ({
		getAnimes: build.mutation<Anime[], string>({
			query: (anime) => ({
				url: `?q=${anime}&sfw`,
				method: "GET",
			}),
		}),
	}),
});

export const { useGetAnimesMutation } = animesApi;
