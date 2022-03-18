import { Navbar, Container, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import {
	faUsers,
	faChalkboardTeacher,
	faQuestion,
	faDatabase,
} from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";

import { getDatabase, ref, child, get } from "firebase/database";
import app from "../firebase";
const database = getDatabase(app);
// InternalDb/Courses/-M8rFNfwcRmYqx8mpJxL/courseCode
// TODO: Replace the following with your App's Firebase project configuration
const dbRef = ref(database);

function Navi() {
	const [name, setName] = useState("Default  Value");
	const getCourseName = (key) => {
		console.log("In getCourse");
		get(child(dbRef, "InternalDb/Courses/" + key + "/courseCode")).then(
			(snapshot) => {
				if (snapshot.exists()) {
					console.log(snapshot.val());
					setName(snapshot.val());
				} else {
					console.log("No data available");
				}
			}
		);

		// return "New Val"
	};
	useEffect(() => {
		// Update the document title using the browser API
		getCourseName("-M8rFNfwcRmYqx8mpJxL");
	});

	return (
		<div className="nav" >
				<Navbar bg="light" variant="light" className="flex" fixed="top">
					<Container>
						<Nav className="mx-auto" variant="tabs">
							<Nav.Link href="#home" className="px-2">
								{" "}
								<FontAwesomeIcon icon={faUsers} /> Students
							</Nav.Link>
							<Nav.Link href="/under_eng" className="px-2">
								{" "}
								<FontAwesomeIcon icon={faChalkboardTeacher} /> Lectures
							</Nav.Link>
							<Nav.Link href="/trustworthy" className="px-2">
								{" "}
								<FontAwesomeIcon icon={faQuestion} /> Quizzes
							</Nav.Link>
							<Nav.Link href="/rawdata" className="px-2">
								{" "}
								<FontAwesomeIcon icon={faDatabase} /> Raw Data
							</Nav.Link>
						</Nav>
					</Container>
				</Navbar>
		</div>
	);
}

export default Navi;
