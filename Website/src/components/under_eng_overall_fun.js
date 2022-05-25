import "bootstrap/dist/css/bootstrap.min.css";
import { child, get, getDatabase, ref } from "firebase/database";
import { React, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams, useNavigate } from "react-router";
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
import lecture_logo from "../Assets/lecture_logo_new.png";
import app from "../firebase";
import Navi from "./navbar";
import "./overall_trustworthy.css";
import "./under_eng.css";

const database = getDatabase(app);
const dbRef = ref(database);

function Under_Eng_Overall_fun() {
	const { id } = useParams();
	const [name, setName] = useState("Default Value");
	const [showme, setShowme] = useState(true);
	const [understanding_arr1, setUnderstanding_arr1] = useState([]);
	const [understanding_arr2, setUnderstanding_arr2] = useState([]);
	const [engagement_arr1, setEngagement_arr1] = useState([]);
	const [engagement_arr2, setEngagement_arr2] = useState([]);
	const [lecture_dn, setLecture_dn] = useState([]);
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

	const getUnderstandingIndex = () => {
		get(child(dbRef, `InternalDb/alt-r/Courses/${id}/Lectures/`)).then(
			(snapshot) => {
				console.log(snapshot.val());
				if (snapshot.exists()) {
					let temp = [];
					console.log(Object.keys(snapshot.val()));
					for (let i = 0; i < Object.keys(snapshot.val()).length; i++) {
						let num = Object.values(snapshot.val())[i][
							"Overall_Understanding index 1"
						];
						let lecture_num = Object.keys(snapshot.val())[i];
						let dict = {};
						dict = { name: lecture_num, understanding_index_1: num };
						temp.push(dict);
					}

					setUnderstanding_arr1(temp);

					let temp2 = [];

					console.log(Object.keys(snapshot.val()));
					for (let i = 0; i < Object.keys(snapshot.val()).length; i++) {
						let num = Object.values(snapshot.val())[i][
							"Overall_Understanding index 2"
						];
						let lecture_num = Object.keys(snapshot.val())[i];
						let dict = {};
						dict = { name: lecture_num, understanding_index_2: num };
						temp2.push(dict);
					}

					console.log(temp2);

					setUnderstanding_arr2(temp2);
				} else {
					console.log("No data available");
				}
			}
		);
	};
	const getEngagementIndex = () => {
		console.log("In TLS_OP");
		get(child(dbRef, `InternalDb/alt-r/Courses/${id}/Lectures/`)).then(
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
							"Overall_Engagement index 1"
						];
						let lecture_num = Object.keys(snapshot.val())[i];

						let dict = {};
						dict = { name: lecture_num, engagement_index_1: num };
						temp.push(dict);
					}

					console.log(temp);

					setEngagement_arr1(temp);

					let temp2 = [];

					console.log(Object.keys(snapshot.val()));
					for (let i = 0; i < Object.keys(snapshot.val()).length; i++) {
						let num = Object.values(snapshot.val())[i][
							"Overall_Engagement index 2"
						];
						let lecture_num = Object.keys(snapshot.val())[i];
						console.log("Printing lecture name");
						console.log(lecture_num);
						let dict = {};
						dict = { name: lecture_num, engagement_index_2: num };
						temp2.push(dict);
					}

					console.log(temp2);

					setEngagement_arr2(temp2);
				} else {
					console.log("No data available");
				}
			}
		);
	};

	const getLectureDatesNames = () => {
		get(child(dbRef, `InternalDb/alt-r/Courses/${id}/Lectures/`)).then(
			(snapshot) => {
				if (snapshot.exists()) {
					console.log("In ALT-Dev database and printing lectures DATESS");
					let temp1 = [];
					console.log(Object.keys(snapshot.val()));
					for (let i = 0; i < Object.keys(snapshot.val()).length; i++) {
						let num = Object.values(snapshot.val())[i]["date"];
						let lecture_num = Object.keys(snapshot.val())[i];
						let obj = { lect_date: num, lect_num: lecture_num };
						temp1.push(obj);
					}
					console.log(temp1);
					setLecture_dn(temp1);
				}
			}
		);
	};
	const route = (lecture_id) => {
		console.log(lecture_id);
		navigate(`/Under_Eng_Func/${id}`, { state: { lecture: lecture_id } });
	};

	const operation = () => {
		setShowme(false);
	};

	const operation_understanding = () => {
		setShowme(true);
	};

	useEffect(() => {
		getCourseName();
		getUnderstandingIndex();
		getEngagementIndex();
		getLectureDatesNames();
	}, []);

	return (
		<div className="App">
			<Container className="heading">
				<h2>{name}</h2>
			</Container>
			<Navi />
			<div className="heading_lecture">
				<br></br>
				<br></br>
				<br></br>
				<br></br>
				<div className="App-header">
					<Button onClick={() => operation_understanding()} className="button">
						Understanding
					</Button>

					<Button onClick={() => operation()} className="button">
						Engagement
					</Button>

					{showme ? (
						<div className="App-header">
							<div className="index1">
								<h4>Understanding Index 1</h4>
								<ResponsiveContainer width="100%">
									<LineChart
										width={9000}
										height={6000}
										data={understanding_arr1}
										margin={{ right: 100 }}
									>
										<CartesianGrid />
										<XAxis dataKey="name" interval={"preserveStartEnd"} />
										<YAxis></YAxis>
										<Legend />
										<Tooltip />
										<Line
											dataKey="understanding_index_1"
											stroke="blue"
											activeDot={{ r: 8 }}
										/>
									</LineChart>
								</ResponsiveContainer>
							</div>

							<div className="index2">
								<h4>Understanding Index 2</h4>
								<ResponsiveContainer width="100%">
									<LineChart
										width={9000}
										height={6000}
										data={understanding_arr2}
										margin={{ right: 100 }}
									>
										<CartesianGrid />
										<XAxis dataKey="name" interval={"preserveStartEnd"} />
										<YAxis></YAxis>
										<Legend />
										<Tooltip />
										<Line
											dataKey="understanding_index_2"
											stroke="blue"
											activeDot={{ r: 8 }}
										/>
									</LineChart>
								</ResponsiveContainer>
							</div>
						</div>
					) : (
						<div className="App-header">
							<div className="index1">
								<h4>Engagement Index 1</h4>
								<ResponsiveContainer width="100%">
									<LineChart
										width={9000}
										height={6000}
										data={engagement_arr1}
										margin={{ right: 100 }}
									>
										<CartesianGrid />
										<XAxis dataKey="name" interval={"preserveStartEnd"} />
										<YAxis></YAxis>
										<Legend />
										<Tooltip />
										<Line
											dataKey="engagement_index_1"
											stroke="blue"
											activeDot={{ r: 8 }}
										/>
									</LineChart>
								</ResponsiveContainer>
							</div>

							<div className="index2">
								<h4>Engagement Index 2</h4>
								<ResponsiveContainer width="100%">
									<LineChart
										width={9000}
										height={6000}
										data={engagement_arr2}
										margin={{ right: 100 }}
									>
										<CartesianGrid />
										<XAxis dataKey="name" interval={"preserveStartEnd"} />
										<YAxis></YAxis>
										<Legend />
										<Tooltip />
										<Line
											dataKey="engagement_index_2"
											stroke="blue"
											activeDot={{ r: 8 }}
										/>
									</LineChart>
								</ResponsiveContainer>
							</div>
						</div>
					)}
					<h4>Lectures </h4>
					{lecture_dn.map((lecture_info) => (
						<>
							<Button
								color="info"
								width="1000"
								height="20"
								onClick={() => route(lecture_info.lect_num)}
							>
								<img src={lecture_logo} width="18" height="20" />
								{lecture_info.lect_num}
								<br></br>
								<img src={calendar_new} width="18" height="20" />
								{lecture_info.lect_date}
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

export default Under_Eng_Overall_fun;
