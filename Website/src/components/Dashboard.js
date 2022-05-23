import React, { useEffect } from "react";
import "./dashboard.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ClassCard from "./ClassCard/ClassCard";
import {
	getDatabase,
	ref,
	child,
	get,
	query,
	orderByChild,
} from "firebase/database";
import app from "../firebase";
import { useAuth } from "../contexts/AuthContext";
import "./spinner.css";

const database = getDatabase(app);
const dbRef = ref(database);

function Dashboard() {
	const { currentUser } = useAuth();
	const [classes, setClasses] = useState([]);
	const [loading, setLoading] = useState(true);

	const fetchCourseContent = (professor) => {
		let all_classes = [];
		const itr = professor.courses;
		for (let i = 0; i < itr.length; i++) {
			get(child(dbRef, `InternalDb/Courses/${itr[i]}`))
				.then((snapshot) => {
					if (snapshot.exists()) {
						const class_obj = snapshot.val();
						const obj = {
							creatorName: class_obj.instructor,
							name: class_obj.courseName,
							id: class_obj.courseCode,
						};
						console.log(obj);
						all_classes.push(obj);
					} else {
						console.log("No data available");
					}
				})
				.then(() => {
					setTimeout(() => {
						setClasses(all_classes);
						setLoading(false);
					}, 500);
				});
		}
	};

	const fetchCourses = () => {
		console.log("In getCourse");
		let professor = null;
		get(child(dbRef, `InternalDb/Faculty/`))
			.then(async (snapshot) => {
				if (snapshot.exists()) {
					let flag = true;
					snapshot.forEach((childSnapshot) => {
						const childData = childSnapshot.val();
						if (childData.email == currentUser.email) {
							console.log("Professor Found");
							flag = false;
							professor = childData;
						}
					});
					if (flag) {
						setLoading(false);
						console.log("You dont have any courses yet");
					}
					fetchCourseContent(professor);
				} else {
					console.log("No data available");
				}
			})
			.catch((e) => {
				setLoading(false);
				console.log("Error Ocuured" + e);
			});
	};
	useEffect(() => {
		fetchCourses();
	}, []);

	return (
		<div className="dashboard">
			{loading ? (
				<div className="spinner-container">
					<div className="loading-spinner"></div>
				</div>
			) : 
			classes?.length == 0 ? (
				<div className="dashboard__404">
					No classes found! Join or create one!
				</div>
			) : (
				<div className="dashboard__classContainer">
					{classes.map((individualClass) => (
						<ClassCard
							creatorName={individualClass.creatorName}
							creatorPhoto={individualClass.creatorPhoto}
							name={individualClass.name}
							id={individualClass.id}
							style={{ marginRight: 30, marginBottom: 30 }}
						/>
					))}
				</div>
			)}
		</div>
	);
}
export default Dashboard;
