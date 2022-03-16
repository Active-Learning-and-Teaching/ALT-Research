import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import RawData from "./components/RawData";
import { Container } from "react-bootstrap";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormPage from "./components/test";
import Trustworthy from "./components/trustworthy";

function App() {
	return (
		<Container
			className="d-flex align-items-center justify-content-center"
			style={{ minHeight: "100vh" }}
		>
			<div className="w-100" style={{ maxWidth: "400px" }}>
				<Router>
					<AuthProvider>
						<Routes>
							<Route exact path="/" element={<Dashboard />} />
							<Route exact path="/signup" element={<Signup />} />
							<Route excat path="/testComponents" element={<FormPage />} />
							<Route exact path="/login" element={<Login />} />
							<Route exact path="/rawdata" element={<RawData/>}/>
							<Route exact path="/trustworthy" element={<Trustworthy/>}/>
						</Routes>
					</AuthProvider>
				</Router>
			</div>
		</Container>
	);
}

export default App;

