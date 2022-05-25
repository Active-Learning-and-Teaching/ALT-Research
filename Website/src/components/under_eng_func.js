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
import "./under_eng.css";

const database = getDatabase(app);

const dbRef = ref(database);
function Under_Eng_Func() {
    
	const { id } = useParams();
	const location = useLocation();
	const lec_id = location.state.lecture;
    const navigate = useNavigate();
	const [name, setName] = useState("Default Value");
	const [showme, setShowme] = useState(true);
	const [uarr1, setUarr1] = useState([]);
	const [uarr2, setUarr2] = useState([]);
	const [engagement_arr1, setEngagement_arr1] = useState([]);
	const [engagement_arr2, setEngagement_arr2] = useState([]);


	const getUnderstandingIndex = () => {
		get(child(dbRef, `InternalDb/alt-r/Courses/${id}/Lectures/${lec_id}`)).then(
			(snapshot) => {
				if (snapshot.exists()) {
					console.log(snapshot.val());
                    setUarr1(snapshot.val()["Array_Division_Understanding1"]);
					setUarr2(snapshot.val()["Array_Division_Understanding2"]);

				} else {
					console.log("No data available");
				}
			}
		);
	};

	const getEngagementIndex = () => {
		console.log("In TLS_OP");
		get(child(dbRef, `InternalDb/alt-r/Courses/${id}/Lectures/${lec_id}`)).then(
			(snapshot) => {
				if (snapshot.exists()) {
					console.log(snapshot.val());
					setEngagement_arr1(snapshot.val()["Array_Division_Enagage1"]);
					setEngagement_arr2(snapshot.val()["Array_Division_Enagage2"]);
				} else {
					console.log("No data available");
				}
			}
		);
	};

    const route = () => {
        navigate(`/Under_eng_overall_fun/${id}`);
    }

	const operation = () => {
		setShowme(false);
	};

	const operation_understanding = () => {
		setShowme(true);
	};

	useEffect(() => {
		getUnderstandingIndex();
		getEngagementIndex();
	}, []);

	return (
		<div className="App">
			<Container className="heading">
				<h2>{name}</h2>
			</Container>
			<Navi />
			<div className="heading_lecture">
				<Button className="small_button" onClick= {() => route()}>
					<img src={back_arrow} width="16" height="17" />
					Back to all lectures
				</Button>
				<br></br>
				<h2>{lec_id}</h2>
				<br></br>
				<br></br>
				<br></br>
				<div className="App-header">
					<Button
						onClick={() => operation_understanding()}
						className="tab-button"
					>
						Understanding
					</Button>

					<Button onClick={() => operation()} className="tab-button">
						Engagement
					</Button>

					{showme ? (
						<div className="App-header">
							<div className="index1">
								<h3>Understanding Index 1</h3>
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
												data: uarr1,
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
									width={"30%"}
									options={{
										legend: {
											display: true,
											position: "bottom",
										},
									}}
								/>
							</div>

							<div className="index2">
								<h3>Understanding Index 2</h3>
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
												data: uarr2,
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
									width={"30%"}
									options={{
										legend: {
											display: true,
											position: "top",
										},
									}}
								/>
							</div>

							
						</div>
					) : (
						<div className="App-header">
							<div className="index1">
								<h3>Engagement Index 1</h3>
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
												data: engagement_arr1,
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
									width={"30%"}
									options={{
										legend: {
											display: true,
											position: "top",
										},
									}}
								/>
							</div>

							<div className="index2">
								<h3>Engagement Index 2</h3>
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
												data: engagement_arr2,
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
									width={"30%"}
									options={{
										legend: {
											display: true,
											position: "top",
										},
									}}
								/>
							</div>

							
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
export default Under_Eng_Func;
