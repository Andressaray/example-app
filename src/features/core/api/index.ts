import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://api.jikan.moe/v4/anime";
const baseQuery = fetchBaseQuery({
	baseUrl,
	prepareHeaders: (headers, { getState }) => {
		headers.set("Content-Type", "application/json");
		return headers;
	},
});

export default baseQuery;
