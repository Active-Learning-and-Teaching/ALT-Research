import "bootstrap/dist/css/bootstrap.min.css";
import { child, get, getDatabase, ref } from "firebase/database";
import { React, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Pie } from "react-chartjs-2";
import { useLocation, useParams, useNavigate } from "react-router";
import { Button } from "reactstrap";
import back_arrow from "../Assets/back_arrow.png";
import app from "../firebase";
import Navi from "./navbar";
import "./overall_trustworthy.css";
import "./trustworthy.css";
import "./under_eng.css";

const database = getDatabase(app);
const dbRef = ref(database);

function Trustworthy_func() {
	const {id} = useParams();
	const location = useLocation();
	const quiz_id = location.state.quiz_no;
	const navigate = useNavigate();
	const [name, setName] = useState("Default Value");
	const [trustworthy_arr1, setTrustworthy_arr1] = useState([]);
	const [trustworthy_arr2, setTrustworthy_arr2] = useState([]);
	const [table, setTable, getTable] = useState([]);
	const heading = ["Name", "Trustworthy Index 1", "Trustworthy Index 2"];

	const View_Table = () => {
		console.log("In get Table");
		get(child(dbRef, "InternalDb/alt-r/Quiz 1/")).then((snapshot) => {
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
		});
	};

	const getTrustworthyIndex = () => {
		get(child(dbRef, `InternalDb/alt-r/Courses/${id}/Quizzes/${quiz_id}`))
			.then((snapshot) => {
				if (snapshot.exists()) {
					console.log(snapshot.val());
					setTrustworthy_arr1(snapshot.val()["Array_Division_Trustworthy1"]);
					setTrustworthy_arr2(snapshot.val()["Array_Division_Trustworthy2"]);
				} else {
					console.log("No data available");
				}
			})
			.catch((e) => console.log(e));
	};

	const route = () => {
		navigate(`/Trustworthy_overall_fun/${id}`);
	};

	useEffect(() => {
		getTrustworthyIndex();
	}, []);

	return (
		<div className="App">
			<Navi></Navi>
			<Container className="heading">
				<h2>{name}</h2>
			</Container>
			<div className="heading_lecture">
				<Button className="small_button" onClick={() => route()}>
					<img src={back_arrow} width="16" height="17" />
					Back to all quizzes
				</Button>
				<br></br>
				<h2>{quiz_id}</h2>
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
				</div>
			</div>
		</div>
	);
}


export default Trustworthy_func;
