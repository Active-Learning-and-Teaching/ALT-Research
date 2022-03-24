import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert, Container } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import AppLogo from "../../Assets/Logo.png";
import "./login-signup.css";

export default function Login() {
	const emailRef = useRef();
	const passwordRef = useRef();
	const { login } = useAuth();
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	async function handleSubmit(e) {
		e.preventDefault();

		try {
			setError("");
			setLoading(true);
			await login(emailRef.current.value, passwordRef.current.value);
			navigate("/dashboard");
		} catch (er) {
			console.log(er);
			setError("Failed to Sign In User");
		}

		setLoading(false);
	}

	return (
		<Container
			className='d-flex align-items-center justify-content-center'
			style={{ minHeight: "100vh" }}
		>
			<div className='w-100' style={{ maxWidth: "400px" }}>
				<Card bg='light'>
					<Card.Body>
						{error && <Alert variant='danger'>{error}</Alert>}
						<Container id='main-container' className='d-grid h-300'>
							<Form id='sign-in-form' className='text-center p-3' onSubmit={handleSubmit}>
								<img className='mb-4 bootstrap-logo' src={AppLogo} />
								<Form.Group className='mb-2' controlId='sign-in-email-address'>
									<Form.Control
										type='email'
										size='lg'
										placeholder='Email address'
										autoComplete='username'
										className='position-relative'
										ref={emailRef}
										required
									/>
								</Form.Group>
								<Form.Group className='mb-2' controlId='sign-in-password'>
									<Form.Control
										type='password'
										size='lg'
										placeholder='Password'
										autoComplete='current-password'
										className='position-relative'
										ref={passwordRef}
										required
									/>
								</Form.Group>
								<Form.Group className='d-flex justify-content-center mb-4' controlId='remember-me'>
									<Form.Check label='Remember me' />
								</Form.Group>
								<div className='d-grid'>
									<style type='text/css'>
										{`
   							 		.btn-flat {
   						  			background-color: #931618;
      								color: white;
  								  }
  							  `}
									</style>
									<Button variant='flat' size='lg' type='submit' disabled={loading}>
										LOG IN
									</Button>
								</div>
								<p className='mt-5 text-muted'>&copy; 2021-2022</p>
							</Form>
						</Container>
					</Card.Body>
				</Card>
				<div className='w-100 text-center mt-2'>
					Need an Account? <Link to='/signup'>Sign Up</Link>
				</div>
			</div>
		</Container>
	);
}
