import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

const Login = props => {
	const [user, setUser] = useState("");
	const [password, setPassword] = useState("");

	const userHandler = e => {
		e.preventDefault();
		setUser(e.target.value);
	};

	const passwordHandler = e => {
		e.preventDefault();
		setPassword(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		let credentials = {
			username: user,
			password: password
		};

		axiosWithAuth()
			.post("http://localhost:5000/api/login", credentials)
			.then(response => {
				localStorage.setItem("token", response.data.payload);
				props.history.push("/bubble-page");
			})
			.catch(error => console.log(error));
	};

	return (
		<div className="home_page">
			<h1>Welcome to the Bubble App!</h1>
			<form onSubmit={handleSubmit}>
				<div>
					<input
						className="form"
						type="text"
						value={user}
						onChange={userHandler}
						placeholder="Lambda School"
					/>
					<input
						className="form"
						type="password"
						value={password}
						onChange={passwordHandler}
						placeholder="i<3Lambd4"
					/>
				</div>
				<button>Log In</button>
			</form>
		</div>
	);
};

export default Login;
