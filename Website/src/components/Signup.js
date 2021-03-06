import React, { useRef, useState } from "react";
import { Alert, Button, Card, Container, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import AppLogo from "../Assets/Logo.png";
import { useAuth } from "../contexts/AuthContext";

export default function Signup() {
	const emailRef = useRef();
	const passwordRef = useRef();
	const passwordConfirmRef = useRef();
	const { signup } = useAuth();
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	async function handleSubmit(e) {
		e.preventDefault();

		if (passwordRef.current.value !== passwordConfirmRef.current.value) {
			return setError("Passwords do not match");
		}

		try {
			setError("");
			setLoading(true);
			await signup(emailRef.current.value, passwordRef.current.value);
			navigate("/dashboard");
		} catch {
			setError("Failed to Signup User");
		}

		setLoading(false);
	}

	return (

		<Container
		className="d-flex align-items-center justify-content-center"
		style={{ minHeight: "100vh" }}
	>
		<div className="w-100" style={{ maxWidth: "400px" }}>

			<Card bg="light">
				<Card.Body>
					{error && <Alert variant="danger">{error}</Alert>}
					<Container id="main-container" className="d-grid h-300">
						<Form
							id="sign-in-form"
							className="text-center p-3"
							onSubmit={handleSubmit}
						>
							<img className="mb-4 bootstrap-logo" src={AppLogo} />
							<Form.Group className="mb-2"controlId="sign-in-email-address">
								<Form.Control
									type="email"
									size="lg"
									placeholder="Email address"
									autoComplete="username"
									className="position-relative"
									ref={emailRef}
									required
								/>
							</Form.Group>
							<Form.Group className="mb-2" controlId="sign-in-password">
								<Form.Control
									type="password"
									size="lg"
									placeholder="Password"
									autoComplete="current-password"
									className="position-relative"
									ref={passwordRef}
									required
								/>
							</Form.Group>
							<Form.Group className="mb-4" controlId="sign-in-password-confirm">
								<Form.Control
									type="password"
									size="lg"
									placeholder="ConfirmPassword"
									autoComplete="current-password"
									className="position-relative"
									ref={passwordConfirmRef}
									required
								/>
							</Form.Group>

							<div className="d-grid">
								<style type="text/css">
									{`
   							 		.btn-flat {
   						  			background-color: #931618;
      								color: white;
  								  }
  							  `}
								</style>
								<Button
									variant="flat"
									size="lg"
									type="submit"
									disabled={loading}
								>
									SIGN UP
								</Button>
							</div>
							<p className="mt-5 text-muted">&copy; 2021-2022</p>
						</Form>
					</Container>
				</Card.Body>
			</Card>
			<div className="w-100 text-center mt-2">
				Already have an account? <Link to="/login">Log In</Link>
			</div>
		</div>
		</Container>
	);
}


