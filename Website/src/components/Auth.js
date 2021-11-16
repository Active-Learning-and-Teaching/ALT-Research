import React, { Component } from "react";

class Auth extends Component {
	login() {
		alert("login Called");
	}

	render() {
		return (
			<div>
				<div>
					<input
						type="text"
						onChange={(e) => this.setState({ email: e.target.value })}
					/>
					<br></br>
					<br></br>
					<input
						type="text"
						onChange={(e) => this.setState({ password: e.target.value })}
					/>
					<br />
					<br />
					<button onClick={() => this.login()}>Login</button>
				</div>
			</div>
		);
	}
}

export default Auth;
