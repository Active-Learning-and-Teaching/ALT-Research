import "bootstrap/dist/css/bootstrap.min.css";
import { child, get, getDatabase, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
import {
	CartesianGrid,
	Legend,
	Line,
	LineChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";
import calendar_new from "../Assets/calendar_new.png";
import quiz_logo from "../Assets/quiz_logo_new.png";
import app from "../firebase";
import Navi from "./navbar";
import "./overall_trustworthy.css";
import "./under_eng.css";

const database = getDatabase(app);
const dbRef = ref(database);

function Trustworthy_overall_fun() {
	const { id } = useParams();
	const [name, setName] = useState("Default Value");
	const [trustworthy_arr1, setTrustworthy_arr1] = useState([]);
	const [trustworthy_arr2, setTrustworthy_arr2] = useState([]);
	const [quiz_dn, setQuizdn] = useState([]);
	const navigate = useNavigate();

	const getCourseName = () => {
		console.log("In getCourse");
		get(child(dbRef, `InternalDb/alt-r/Courses/${id}`)).then((snapshot) => {
			if (snapshot.exists()) {
				let obj = snapshot.val();
				let courseName = obj.pk;
				let cut_idx = courseName.lastIndexOf("_");
				courseName = courseName.slice(cut_idx + 1, courseName.length);
				setName(courseName);
			} else {
				console.log("No data available");
			}
		});
	};

	const getTrustworthyIndex = () => {
		get(child(dbRef, `InternalDb/alt-r/Courses/${id}/Quizzes/`)).then(
			(snapshot) => {
				console.log("Printing Snapshotttts");
				console.log(snapshot);
				console.log(snapshot.val());
				if (snapshot.exists()) {
					console.log("In ALT-Dev database and printing lectures table");
					let temp = [];
					console.log(Object.keys(snapshot.val()));
					for (let i = 0; i < Object.keys(snapshot.val()).length; i++) {
						let num = Object.values(snapshot.val())[i][
							"Overall_Trustworthy index1"
						];
						console.log(num);
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
							"Overall_Trustworthy index2"
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
			}
		);
	};

	const getQuizDatesNames = () => {
		get(child(dbRef, `InternalDb/alt-r/Courses/${id}/Quizzes/`)).then(
			(snapshot) => {
				if (snapshot.exists()) {
					console.log("In ALT-Dev database and printing Quiz DATESS");
					let temp1 = [];
					let temp2 = []; // Having lecture names
					console.log(Object.keys(snapshot.val()));
					for (var i = 0; i < Object.keys(snapshot.val()).length; i++) {
						var num = Object.values(snapshot.val())[i]["date"];
						var quiz_num = Object.keys(snapshot.val())[i];
						let obj = { quiz_date: num, quiz_num: quiz_num };
						temp1.push(obj);
					}

					console.log(temp1);
					setQuizdn(temp1);
				}
			}
		);
	};

	const route = (quiz_id) => {
		console.log(quiz_id);
		navigate(`/Trustworthy_func/${id}`, { state: { quiz_no: quiz_id } });
	};

	useEffect(() => {
		getCourseName();
		getTrustworthyIndex();
		getQuizDatesNames();
	}, []);

	return (
		<div className="App">
			<Navi></Navi>
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

					{quiz_dn.map((quiz_info) => (
						<>
							<Button
								color="info"
								width="1000"
								height="20"
								onClick={() => route(quiz_info.quiz_num)}
							>
								<img src={quiz_logo} width="18" height="20" />
								{quiz_info.quiz_num}
								<br></br>
								<img src={calendar_new} width="18" height="20" />
								{quiz_info.quiz_date}
							</Button>
							<br></br>
							<br></br>
						</>
					))}
				</div>
			</div>
		</div>
	);
}

export default Trustworthy_overall_fun;
