import { Link } from "react-router-dom";
import FormLogin from "../../components/form";

const Login = () => {
	return (
		<div className="">
			<title>Login</title>
			<Link to={"/"}>welcome</Link>
			<FormLogin />
		</div>
	);
};
export default Login;
