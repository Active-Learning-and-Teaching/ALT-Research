import {
	faChalkboardTeacher, faDatabase, faQuestion, faRobot, faUsers
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";
import { getDatabase, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import app from "../firebase";
const database = getDatabase(app);
// InternalDb/Courses/-M8rFNfwcRmYqx8mpJxL/courseCode
// TODO: Replace the following with your App's Firebase project configuration
const dbRef = ref(database);

function Navi() {
	const navigate = useNavigate();
	const [name, setName] = useState("Default  Value");
	const { id } = useParams();


	const handleSelect = (eventKey) => {
		let dest = eventKey+id
		navigate(dest);
	}

	// const getCourseName = (key) => {
	// 	console.log("In getCourse");
	// 	get(child(dbRef, "InternalDb/Courses/" + key + "/courseCode")).then(
	// 		(snapshot) => {
	// 			if (snapshot.exists()) {
	// 				console.log(snapshot.val());
	// 				setName(snapshot.val());
	// 			} else {
	// 				console.log("No data available");
	// 			}
	// 		}
	// 	);

	// 	// return "New Val"
	// };


	useEffect(() => {
	});

	return (
		<div className="nav" >
				<Navbar bg="light" variant="light" className="flex" fixed="top" onSelect={handleSelect}>
					<Container>
						<Nav className="mx-auto" variant="tabs">
							<Nav.Link href="#home" className="px-2">
								{" "}
								<FontAwesomeIcon icon={faUsers} /> Students
							</Nav.Link>
							<Nav.Link eventKey="/Under_eng_overall_fun/" className="px-2">
								{" "}
								<FontAwesomeIcon icon={faChalkboardTeacher} /> Lectures
							</Nav.Link>
							<Nav.Link eventKey="/Trustworthy_overall_fun/" className="px-2">
								{" "}
								<FontAwesomeIcon icon={faQuestion} /> Quizzes
							</Nav.Link>
							<Nav.Link eventKey="/rawdata/" className="px-2">
								{" "}
								<FontAwesomeIcon icon={faDatabase} /> Raw Data
							</Nav.Link>
							<Nav.Link eventKey="/explainer_dashboard/" className="px-2">
								{" "}
								<FontAwesomeIcon icon={faRobot} /> Model Analysis
							</Nav.Link>
						</Nav>
					</Container>
				</Navbar>
		</div>
	);
}

export default Navi;
