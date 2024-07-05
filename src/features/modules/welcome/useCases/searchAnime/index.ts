import { useEffect, useState } from "react";
import { useGetAnimesMutation } from "../../services";
import { Anime } from "../../../../../types/anime";

const useSearchAnime = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [data, setData] = useState<Anime[]>([]);
	const [search, setSearch] = useState<string>("");
	const [getAnimes] = useGetAnimesMutation();

	useEffect(() => {
		const handler = setTimeout(() => {
			setData([]);
			if (search.length) {
				setIsLoading(true);
				getAnimes(search)
					.then((r) => {
						if (!r.error) {
							setData(r.data.data);
						}
					})
					.catch((e) => {
						console.log("e", e);
					})
					.finally(() => {
						setIsLoading(false);
					});
			}
		}, 1500);
		return () => {
			clearTimeout(handler);
		};
	}, [search]);

	return {
		isLoading,
		data,
		search,
		setSearch,
	};
};

export default useSearchAnime;
