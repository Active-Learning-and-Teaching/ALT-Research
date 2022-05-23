import React, { useEffect } from "react";
import "./trustworthy.css";
import { Pie, Doughnut } from "react-chartjs-2";
import { Button } from "reactstrap";
import {
	Navbar,
	Container,
	Nav,
	NavDropdown,
	NavbarBrand,
	Row,
	Col,
} from "react-bootstrap";
import back_arrow from "../Assets/back_arrow.png";
import { getDatabase, ref, child, get } from "firebase/database";
import app from "../firebase";
import Navi from "./navbar";
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

//npm install reactstrap react react-dom
const dbRef = ref(database);

function Trustworthy_func() {

    const [name, setName] = useState("Default Value");
	const [quiz_name, setQuiz_name] = useState("Quiz No.");
	const [trustworthy_arr1, setTrustworthy_arr1] = useState([]);
	const [trustworthy_arr2, setTrustworthy_arr2] = useState([]);
    const [table,setTable,getTable]=useState([]);

    
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

	const View_Table = () => {
		console.log("In get Table");
		get(child(dbRef, "InternalDb/alt-r/Quiz 1/"))
			.then((snapshot) => {
				if (snapshot.exists()) {
					console.log("Printing Table");
					console.log(snapshot.val());
					for (var i = 0; i < Object.keys(snapshot.val()).length; i++) {
						var arr = [];
						var key = Object.keys(snapshot.val())[i];
						var value = Object.values(snapshot.val())[i];
						arr.push(key);
						arr.push(Object.values(value)[0]);
						arr.push(Object.values(value)[1]);
                        setTable(getTable().push(arr));
					}
					
				} else {
					console.log("No data available");
				}
			}
            );
	};
    
	const getTrustworthyIndex = () => {
		console.log("In TLS_OP");
		get(child(dbRef, "InternalDb/alt-r/Quiz 1/"))
			.then((snapshot) => {
				if (snapshot.exists()) {
					console.log(snapshot.val());

					let temp = [];
					var under20 = 0;
					var under40 = 0;
					var under60 = 0;
					var under80 = 0;
					var under100 = 0;
					console.log(Object.keys(snapshot.val()).length);
					for (var i = 0; i < Object.keys(snapshot.val()).length; i++) {
						var num =
							Object.values(snapshot.val())[i]["Trustworthy Index 1"] * 100;
						console.log(num);
						if (num >= 0 && num <= 20) {
							under20 = under20 + 1;
						} else if (num > 20 && num <= 40) {
							under40 = under40 + 1;
						} else if (num > 40 && num <= 60) {
							under60 = under60 + 1;
						} else if (num > 60 && num <= 80) {
							under80 = under80 + 1;
						} else if (num > 80 && num <= 100) {
							under100 += 1;
						}
					}
					temp.push(under20);
					temp.push(under40);
					temp.push(under60);
					temp.push(under80);
					temp.push(under100);
					console.log(temp);

                    setTrustworthy_arr1(temp);

		

					let temp2 = [];
					var under20_2 = 0;
					var under40_2 = 0;
					var under60_2 = 0;
					var under80_2 = 0;
					var under100_2 = 0;
					console.log(Object.keys(snapshot.val()).length);
					for (var i = 0; i < Object.keys(snapshot.val()).length; i++) {
						var num =
							Object.values(snapshot.val())[i]["Trustworthy Index 2"] * 100;
						console.log(num);
						if (num >= 0 && num <= 20) {
							under20_2 += 1;
						} else if (num > 20 && num <= 40) {
							under40_2 += 1;
						} else if (num > 40 && num <= 60) {
							under60_2 += 1;
						} else if (num > 60 && num <= 80) {
							under80_2 += 1;
						} else if (num > 80 && num <= 100) {
							under100_2 += 1;
						}
					}
					temp2.push(under20_2);
					temp2.push(under40_2);
					temp2.push(under60_2);
					temp2.push(under80_2);
					temp2.push(under100_2);
					console.log(temp2);

                    setTrustworthy_arr2(temp2);
				} else {
					console.log("No data available");
				}
			})
			.catch((e) => console.log(e));
	}

	const getQuizName = () => {
		console.log("In TLS_OP to get Quiz Name");
		get(child(dbRef, "InternalDb/alt-r/"))
			.then((snapshot) => {
				if (snapshot.exists()) {
					console.log("Quiz Name-: ");
					console.log(Object.keys(snapshot.val())[1]);
                    setQuiz_name(Object.keys(snapshot.val())[1]);
				} else {
					console.log("No data available");
				}
			});
        };
    
    useEffect(() => {
        getCourseName("-M8rFNfwcRmYqx8mpJxL");
        getTrustworthyIndex();
        getQuizName();
        View_Table();
    }, []);

	
	return (
			<div className="App">
				<Navi></Navi>
				<Container className="heading">
					<h2>{name}</h2>
				</Container>
				<div className="heading_lecture">
					<Button className="small_button">
						<img src={back_arrow} width="16" height="17" />
						Back to all quizzes
					</Button>
					<br></br>
					<h2>{quiz_name}</h2>
					<br></br>
					<br></br>
					<br></br>
					<div className="App-header">
						<Button className="button">Trustworthyness</Button>

						<div className="App-header">
							<div className="index1">
								<h2>Trustworthy Index 1</h2>
								<Pie
									data={{
										labels: [
											"0% - 20%",
											"20% - 40%",
											"40% - 60%",
											"60% - 80%",
											"80% - 100%",
										],
										datasets: [
											{
												data: trustworthy_arr1,
												backgroundColor: [
													"rgb(255, 99, 132)",
													"rgb(54, 162, 235)",
													"rgb(255, 205, 86)",
													"rgb(50,205,50)",
													"rgb(255,0,0)",
												],
												hoverOffset: 4,
											},
										],
									}}
									width={"50%"}
									options={{
										legend: {
											display: true,
											position: "bottom",
										},
									}}
								/>
							</div>

							<div className="index2">
								<h2>Trustworthy Index 2</h2>
								<Pie
									data={{
										labels: [
											"0% - 20%",
											"20% - 40%",
											"40% - 60%",
											"60% - 80%",
											"80% - 100%",
										],
										datasets: [
											{
												data: trustworthy_arr2,
												backgroundColor: [
													"rgb(255, 99, 132)",
													"rgb(54, 162, 235)",
													"rgb(255, 205, 86)",
													"rgb(50,205,50)",
													"rgb(255,0,0)",
												],
												hoverOffset: 4,
											},
										],
									}}
									width={"50%"}
									options={{
										legend: {
											display: true,
											position: "top",
										},
									}}
								/>
							</div>
						</div>

						<h2>Students</h2>
						<div className="Table">
							<Table heading={heading} body={table} />
						</div>
					</div>
				</div>
			</div>
		);

}

function Table(props) {

	let heading = props.heading;
	let body = props.body

	return (
		<table style={{ width: 500 }}>
			<thead>
				<tr>
					{heading.map((head) => (
						<th>{head}</th>
					))}
				</tr>
			</thead>
			<tbody>
				{body.map((row) => (
					<TableRow row={row} />
				))}
			</tbody>
		</table>
	);

}
function TableRow(props) {
    let row=props.row;
    return (
        <tr>
            {row.map((val) => (
                <td>{val}</td>
            ))}
        </tr>
    );

}

export default Trustworthy_func;
