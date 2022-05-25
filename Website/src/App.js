import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import NewComponent from "./components/explainer";
import Login from "./components/Login";
import RawData from "./components/RawData";
import Signup from "./components/Signup";
import Trustworthy_overall_fun from "./components/trustworthy_overFun";
import Under_Eng_Overall_fun from "./components/under_eng_overall_fun";
import { AuthProvider } from "./contexts/AuthContext";
import Under_Eng_Func from "./components/under_eng_func";
import Trustworthy_func from "./components/trustworthy_Func";

function App() {
	return (
		<Router>
			<AuthProvider>
				<Routes>
					<Route exact path="/" element={<Login />} />
					<Route exact path="/login" element={<Login />} />
					<Route exact path="/dashboard" element={<Dashboard />} />
					<Route exact path="/signup" element={<Signup />} />
					<Route exact path="/rawdata/:id" element={<RawData />} />
					<Route
						exact
						path="/Under_eng_overall_fun/:id"
						element={<Under_Eng_Overall_fun />}
					/>
					<Route
						exact
						path="/explainer_dashboard/:id"
						element={<NewComponent />}
					/>
					<Route
						exact
						path="/Trustworthy_overall_fun/:id"
						element={<Trustworthy_overall_fun />}
					/>
					<Route
						exact
						path="/Under_Eng_Func/:id"
						element={<Under_Eng_Func />}
					/>
					<Route
						exact
						path="/Trustworthy_func/:id"
						element={<Trustworthy_func />}
					/>
				</Routes>
			</AuthProvider>
		</Router>
	);
}

export default App;
