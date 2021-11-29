import { Form, Button, Card, Alert, Container } from "react-bootstrap";
import AppLogo from "../Assets/Logo.png";
import "./login-signup.css";

function App() {
	return (
		<Card bg="light">
			<Card.Body>
				<Container id="main-container" className="d-grid h-300">
					<Form
						id="sign-in-form"
						className="text-center p-3"
					>
						<img className="mb-4 bootstrap-logo" src={AppLogo} />
						<Form.Group controlId="sign-in-email-address">
							<Form.Control
								type="email"
								size="lg"
								placeholder="Email address"
								autoComplete="username"
								className="position-relative"
							/>
						</Form.Group>
						<Form.Group className="mb-3" controlId="sign-in-password">
							<Form.Control
								type="password"
								size="lg"
								placeholder="Password"
								autoComplete="current-password"
								className="position-relative"
							/>
						</Form.Group>
						<Form.Group
							className="d-flex justify-content-center mb-4"
							controlId="remember-me"
						>
							<Form.Check label="Remember me" />
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
							<Button variant="flat" size="lg" type="submit">
								SIGN IN
							</Button>
						</div>
						<p className="mt-5 text-muted">&copy; 2021-2022</p>
					</Form>
				</Container>
			</Card.Body>
		</Card>
	);
}

export default App;
