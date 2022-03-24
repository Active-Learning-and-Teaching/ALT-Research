import Signup from "../Signup/Signup";
import Dashboard from "../Dashboard/Dashboard";
import Login from "../Login/Login";
import RawData from "../RawData/RawData";
import { AuthProvider } from "../../contexts/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Trustworthy from "../Trustworthy/trustworthy";
import Under_Eng from "../UnderEng/under_eng";
import Under_Eng_Overall from "../UnderEng/Overall/under_eng_overall";
import Trustworthy_Overall from "../Trustworthy/Overall/trustworthy_overall";

function App() {
	return (
		<Router>
			<AuthProvider>
				<Routes>
					<Route exact path='/' element={<Login />} />
					<Route exact path='/login' element={<Login />} />
					<Route exact path='/dashboard' element={<Dashboard />} />
					<Route exact path='/signup' element={<Signup />} />
					<Route exact path='/rawdata' element={<RawData />} />
					<Route exact path='/trustworthy' element={<Trustworthy />} />
					<Route exact path='/under_eng' element={<Under_Eng />} />
					<Route exact path='/under_eng_overall' element={<Under_Eng_Overall />} />
					<Route exact path='/trustworthy_overall' element={<Trustworthy_Overall />} />
				</Routes>
			</AuthProvider>
		</Router>
	);
}

export default App;
