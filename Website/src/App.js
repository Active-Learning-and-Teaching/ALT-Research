import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import RawData from "./components/RawData";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Trustworthy from "./components/trustworthy";
import Under_Eng from "./components/under_eng";
import Under_Eng_Overall from "./components/under_eng_overall";
import Trustworthy_Overall from "./components/trustworthy_overall";
import NewComponent from "./components/explainer";
import Trustworthy_overall_fun from "./components/trustworthy_overFun";


function App() {
	return (
		<Router>
			<AuthProvider>
				<Routes>
					<Route exact path="/" element={<Login />} />
					<Route exact path="/login" element={<Login />} />
					<Route exact path="/dashboard" element={<Dashboard />} />
					<Route exact path="/signup" element={<Signup />} />
					<Route exact path="/rawdata" element={<RawData />} />
					<Route exact path="/trustworthy" element={<Trustworthy />} />
					<Route exact path="/under_eng" element={<Under_Eng />} />
					<Route
						exact
						path="/under_eng_overall"
						element={<Under_Eng_Overall />}
					/>
					<Route
						exact
						path="/trustworthy_overall"
						element={<Trustworthy_Overall />}
					/>
					<Route exact path="/explainer_dashboard" element={<NewComponent />} />
					<Route
						exact
						path="/Trustworthy_overall_fun"
						element={<Trustworthy_overall_fun />}
					/>
				</Routes>
			</AuthProvider>
		</Router>
	);
}

export default App;
