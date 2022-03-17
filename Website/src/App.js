import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import RawData from "./components/RawData";
import { Container } from "react-bootstrap";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormPage from "./components/test";
import Trustworthy from "./components/trustworthy";
import Under_Eng from "./components/under_eng";

function App() {
	return (
		<Router>
			<AuthProvider>
				<Routes>
					<Route exact path="/" element={<Dashboard />} />
					<Route exact path="/signup" element={<Signup />} />
					<Route excat path="/testComponents" element={<FormPage />} />
					<Route exact path="/login" element={<Login />} />
					<Route exact path="/rawdata" element={<RawData/>}/>
					<Route exact path="/trustworthy" element={<Trustworthy/>}/>
					<Route exact path="/under_eng" element={<Under_Eng/>}/>
				</Routes>
			</AuthProvider>
		</Router>
	);
}

export default App;

