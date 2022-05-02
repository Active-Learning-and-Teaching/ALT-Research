import "./overall_trustworthy.css";
import React, { Component } from "react";
import { Pie, Doughnut } from "react-chartjs-2";
import { Button } from "reactstrap";
import { Navbar, Container, Nav, NavDropdown, NavbarBrand, Row, Col } from "react-bootstrap";
import quiz_logo from "../Assets/quiz_logo_new.png";
import calendar_new from "../Assets/calendar_new.png";
import { getDatabase, ref, child, get } from "firebase/database";
import app from "../firebase";
import Navi from "./navbar";
import "./under_eng.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import {
	faUsers,
	faChalkboardTeacher,
	faQuestion,
	faDatabase,
} from "@fortawesome/free-solid-svg-icons";
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
class Trustworthy_Overall extends React.Component {
	constructor() {
		super();
		this.state = {
			showMe: true,
			name: "Default Value",
			quiz_name: "Quiz No.",
			trustworrthy_arr1: [],
			trustworthy_arr2: [],
			quiz_dates: [],
			quiz_names: [],
		};
		this.getCourseName = this.getCourseName.bind(this);
		this.getTrustworthyIndex();
		this.getQuizName();
		this.getQuizDate();
	}
	getCourseName(key) {
		console.log("In getCourse");
		get(child(dbRef, "InternalDb/Courses/" + key + "/courseCode")).then((snapshot) => {
			if (snapshot.exists()) {
				console.log(snapshot.val());
				this.setState({ name: snapshot.val() });
				//console.log(this.name);
			} else {
				console.log("No data available");
			}
		});
	}
	getTrustworthyIndex() {
		console.log("In TLS_OP");
		get(child(dbRef, "InternalDb/alt-r/Quizzes")).then((snapshot) => {
			console.log("Printing Snapshotttts");
			console.log(snapshot);
			console.log(snapshot.val());
			if (snapshot.exists()) {
				console.log("In ALT-Dev database and printing lectures table");
				let temp = [];
				console.log(Object.keys(snapshot.val()));
				for (var i = 0; i < Object.keys(snapshot.val()).length; i++) {
					var num = Object.values(snapshot.val())[i]["Overall_Trustworthy index 1"];
					var quiz_num = Object.keys(snapshot.val())[i];
					var dict = {};
					var dict = { name: quiz_num, trustworthy_index_1: num };
					temp.push(dict);
				}

				console.log(temp);

				this.setState({ trustworrthy_arr1: temp });

				let temp2 = [];

				console.log(Object.keys(snapshot.val()));
				for (var i = 0; i < Object.keys(snapshot.val()).length; i++) {
					var num = Object.values(snapshot.val())[i]["Overall_Trustworthy index 2"];
					var quiz_num = Object.keys(snapshot.val())[i];
					var dict = {};
					var dict = { name: quiz_num, trustworthy_index_2: num };
					temp2.push(dict);
				}

				console.log(temp2);

				this.setState({ trustworthy_arr2: temp2 });
			} else {
				console.log("No data available");
			}
		});
	}

	getQuizName() {
		console.log("In TLS_OP to get Quiz Name");
		get(child(dbRef, "InternalDb/alt-r/Quizzes")).then((snapshot) => {
			if (snapshot.exists()) {
				this.setState({ quiz_name: Object.keys(snapshot.val())[0] });
			} else {
				console.log("No data available");
			}
		});
	}

	getQuizDate() {
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

				this.setState({ quiz_dates: temp1 });
				this.setState({ quiz_names: temp2 });
			}
		});
	}

	operation() {
		this.setState({
			showMe: false,
		});
	}
	componentDidMount() {
		this.getCourseName("-M8rFNfwcRmYqx8mpJxL");
		this.getTrustworthyIndex();
		this.getQuizName();
		this.getQuizDate();
	}
	render() {
		return (
			<div className='overallTrust_container'>
				<Container className='overallTrust_heading'>
					<h2>{this.state.name}</h2>
				</Container>
				<div className='overallTrust_heading_lecture'>
					<br></br>
					<br></br>
					<br></br>
					<br></br>
					<div className='overallTrust_container_header'>
						<Button className='overallTrust_button'>Trustworthy Index</Button>
						<div className='overallTrust_container_header'>
							<div className='overallTrust_index1'>
								<h4>Trustworthy Index 1</h4>
								<ResponsiveContainer width='100%'>
									<LineChart
										width={9000}
										height={6000}
										data={this.state.trustworrthy_arr1}
										margin={{ right: 100 }}
									>
										<CartesianGrid />
										<XAxis dataKey='name' interval={"preserveStartEnd"} />
										<YAxis></YAxis>
										<Legend />
										<Tooltip />
										<Line dataKey='trustworthy_index_1' stroke='blue' activeDot={{ r: 8 }} />
									</LineChart>
								</ResponsiveContainer>
							</div>

							<div className='overallTrust_index2'>
								<h4>Trustworthy Index 2</h4>
								<ResponsiveContainer width='100%'>
									<LineChart
										width={9000}
										height={6000}
										data={this.state.trustworthy_arr2}
										margin={{ right: 100 }}
									>
										<CartesianGrid />
										<XAxis dataKey='name' interval={"preserveStartEnd"} />
										<YAxis></YAxis>
										<Legend />
										<Tooltip />
										<Line dataKey='trustworthy_index_2' stroke='blue' activeDot={{ r: 8 }} />
									</LineChart>
								</ResponsiveContainer>
							</div>
						</div>

						<h4>Quizzes </h4>

						<Button color='info' width='1000' height='20' onClick={() => this.operation()}>
							<img src={quiz_logo} width='18' height='20' />
							{this.state.quiz_names[0]}
							<br></br>
							<img src={calendar_new} width='18' height='20' />
							{this.state.quiz_dates[0]}
						</Button>
						<br></br>
						<br></br>
						<Button color='info' onClick={() => this.operation()}>
							<img src={quiz_logo} width='18' height='20' />
							{this.state.quiz_names[1]}
							<br></br>
							<img src={calendar_new} width='18' height='20' />
							{this.state.quiz_dates[1]}
						</Button>
						<br></br>
						<br></br>
						<Button color='info' onClick={() => this.operation()}>
							<img src={quiz_logo} width='18' height='20' />
							{this.state.quiz_names[2]}
							<br></br>
							<img src={calendar_new} width='18' height='20' />
							{this.state.quiz_dates[2]}
						</Button>
						<br></br>
						<br></br>
					</div>
				</div>
			</div>
		);
	}
}
export default Trustworthy_Overall;
