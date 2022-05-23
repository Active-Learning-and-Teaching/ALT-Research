import React, { useEffect } from "react";
import "./overall_trustworthy.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ClassCard from "./ClassCard/ClassCard";
import {
	Navbar,
	Container,
	Nav,
	NavDropdown,
	NavbarBrand,
	Row,
	Col,
} from "react-bootstrap";
import quiz_logo from "../Assets/quiz_logo_new.png";
import calendar_new from "../Assets/calendar_new.png";
import {
	getDatabase,
	ref,
	child,
	get,
	query,
	orderByChild,
} from "firebase/database";
import { Button } from "reactstrap";
import app from "../firebase";
import Navi from "./navbar";
import "./under_eng.css";

import "bootstrap/dist/css/bootstrap.min.css";

import {
	LineChart,
	ResponsiveContainer,
	Legend,
	Tooltip,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
} from "recharts";

const database = getDatabase(app);
const dbRef = ref(database);

function Trustworthy_overall_fun() {
	const [name, setName] = useState("Default Value");
	const [showme, setShowme] = useState(true);
	const [quiz_name, setQuiz_name] = useState("Quiz No.");
	const [trustworthy_arr1, setTrustworthy_arr1] = useState([]);
	const [trustworthy_arr2, setTrustworthy_arr2] = useState([]);
	const [quiz_dates, setQuiz_dates] = useState([]);
	const [quiz_names, setQuiz_names] = useState([]);

	const getCourseName = (key) => {
		console.log("In getCourse");
		get(child(dbRef, "InternalDb/Courses/" + key + "/courseCode")).then(
			(snapshot) => {
				if (snapshot.exists()) {
					console.log(snapshot.val());
					setName(snapshot.val());
					//console.log(name);
				} else {
					console.log("No data available");
				}
			}
		);
	};

	const getTrustworthyIndex = () => {
		console.log("In TLS_OP");
		get(child(dbRef, "InternalDb/alt-r/Quizzes")).then((snapshot) => {
			console.log("Printing Snapshotttts");
			console.log(snapshot);
			console.log(snapshot.val());
			if (snapshot.exists()) {
				console.log("In ALT-Dev database and printing lectures table");
				let temp = [];
				console.log(Object.keys(snapshot.val()));
				for (let i = 0; i < Object.keys(snapshot.val()).length; i++) {
					let num = Object.values(snapshot.val())[i][
						"Overall_Trustworthy index 1"
					];
					let quiz_num = Object.keys(snapshot.val())[i];
					let dict = { name: quiz_num, trustworthy_index_1: num };
					temp.push(dict);
				}
				console.log(temp);

				setTrustworthy_arr1(temp);

				let temp2 = [];

				console.log(Object.keys(snapshot.val()));
				for (let i = 0; i < Object.keys(snapshot.val()).length; i++) {
					let num = Object.values(snapshot.val())[i][
						"Overall_Trustworthy index 2"
					];
					let quiz_num = Object.keys(snapshot.val())[i];
					let dict = { name: quiz_num, trustworthy_index_2: num };
					temp2.push(dict);
				}

				console.log(temp2);

				setTrustworthy_arr2(temp2);
			} else {
				console.log("No data available");
			}
		});
	};

	const getQuizName = () => {
		console.log("In TLS_OP to get Quiz Name");
		get(child(dbRef, "InternalDb/alt-r/Quizzes")).then((snapshot) => {
			if (snapshot.exists()) {
				setQuiz_name(Object.keys(snapshot.val())[0]);
			} else {
				console.log("No data available");
			}
		});
	};

	const getQuizDate = () => {
		get(child(dbRef, "InternalDb/alt-r/Quizzes")).then((snapshot) => {
			if (snapshot.exists()) {
				console.log("In ALT-Dev database and printing Quiz DATESS");
				let temp1 = [];
				let temp2 = []; // Having lecture names
				console.log(Object.keys(snapshot.val()));
				for (var i = 0; i < Object.keys(snapshot.val()).length; i++) {
					var num = Object.values(snapshot.val())[i]["date"];
					var quiz_num = Object.keys(snapshot.val())[i];
					temp1.push(num);
					temp2.push(quiz_num);
				}

				console.log(temp1);

				setQuiz_dates(temp1);
				setQuiz_names(temp2);
			}
		});
	};

	const operation = () => {
		this.setState({
			showMe: false,
		});
	};

	useEffect(() => {
		getCourseName("-M8rFNfwcRmYqx8mpJxL");
		getTrustworthyIndex();
		getQuizName();
		getQuizDate();
	}, []);

	return (
		<div className="App">
			<Container className="heading">
				<h2>{name}</h2>
			</Container>
			<div className="heading_lecture">
				<br></br>
				<br></br>
				<br></br>
				<br></br>
				<div className="App-header">
					<Button className="button">Trustworthy Index</Button>
					<div className="App-header">
						<div className="index1">
							<h4>Trustworthy Index 1</h4>
							<ResponsiveContainer width="100%">
								<LineChart
									width={9000}
									height={6000}
									data={trustworthy_arr1}
									margin={{ right: 100 }}
								>
									<CartesianGrid />
									<XAxis dataKey="name" interval={"preserveStartEnd"} />
									<YAxis></YAxis>
									<Legend />
									<Tooltip />
									<Line
										dataKey="trustworthy_index_1"
										stroke="blue"
										activeDot={{ r: 8 }}
									/>
								</LineChart>
							</ResponsiveContainer>
						</div>

						<div className="index2">
							<h4>Trustworthy Index 2</h4>
							<ResponsiveContainer width="100%">
								<LineChart
									width={9000}
									height={6000}
									data={trustworthy_arr2}
									margin={{ right: 100 }}
								>
									<CartesianGrid />
									<XAxis dataKey="name" interval={"preserveStartEnd"} />
									<YAxis></YAxis>
									<Legend />
									<Tooltip />
									<Line
										dataKey="trustworthy_index_2"
										stroke="blue"
										activeDot={{ r: 8 }}
									/>
								</LineChart>
							</ResponsiveContainer>
						</div>
					</div>

					<h4>Quizzes </h4>

					<Button
						color="info"
						width="1000"
						height="20"
						onClick={() => operation()}
					>
						<img src={quiz_logo} width="18" height="20" />
						{quiz_names[0]}
						<br></br>
						<img src={calendar_new} width="18" height="20" />
						{quiz_dates[0]}
					</Button>
					<br></br>
					<br></br>
					<Button color="info" onClick={() => operation()}>
						<img src={quiz_logo} width="18" height="20" />
						{quiz_names[1]}
						<br></br>
						<img src={calendar_new} width="18" height="20" />
						{quiz_dates[1]}
					</Button>
					<br></br>
					<br></br>
					<Button color="info" onClick={() => operation()}>
						<img src={quiz_logo} width="18" height="20" />
						{quiz_names[2]}
						<br></br>
						<img src={calendar_new} width="18" height="20" />
						{quiz_dates[2]}
					</Button>
					<br></br>
					<br></br>
				</div>
			</div>
		</div>
	);
}

export default Trustworthy_overall_fun;
