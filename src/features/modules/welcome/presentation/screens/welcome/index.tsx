import { Link } from "react-router-dom";
import useSearchAnime from "../../../useCases/searchAnime";

const Welcome = () => {
	const { search, setSearch, isLoading, data } = useSearchAnime();
	return (
		<div className="">
			<title>Welcome</title>
			Welcome <Link to={"/login"}>login</Link>
			<input
				placeholder="Search"
				data-testid="search"
				value={search}
				onChange={(v) => {
					setSearch(v.target.value);
				}}
			/>
			{isLoading && "Cargando"}
			{data.map((item) => (
				<div className="" key={item.mal_id}>
					<p>{item.title}</p>
				</div>
			))}
		</div>
	);
};
export default Welcome;
