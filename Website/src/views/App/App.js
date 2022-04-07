import { AuthProvider } from "../../contexts/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { routes } from "../../routes";
import React from "react";
import Layout from "../../components/Layout/Layout";

function App() {
	return (
		<Router>
			<AuthProvider>
				<Routes>
					{routes.map((route, idx) => {
						return route.auth ? (
							<Route
								key={idx}
								path={route.path}
								element={
									<Layout>
										<route.component />
									</Layout>
								}
							/>
						) : (
							<Route key={idx} path={route.path} element={<route.component />} />
						);
					})}
					{/* <Route exact path='/' element={<Login />} />
					<Route exact path='/login' element={<Login />} />
					<Route exact path='/dashboard' element={<Dashboard />} />
					<Route exact path='/signup' element={<Signup />} />
					<Route exact path='/rawdata' element={<RawData />} />
					<Route exact path='/trustworthy' element={<Trustworthy />} />
					<Route exact path='/under_eng' element={<Under_Eng />} />
					<Route exact path='/under_eng_overall' element={<Under_Eng_Overall />} />
					<Route exact path='/trustworthy_overall' element={<Trustworthy_Overall />} /> */}
				</Routes>
			</AuthProvider>
		</Router>
	);
}

export default App;
