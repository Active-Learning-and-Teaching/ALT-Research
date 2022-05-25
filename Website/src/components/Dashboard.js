import {
	child,
	get, getDatabase,
	ref
} from "firebase/database";
import React, { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import app from "../firebase";
import ClassCard from "./ClassCard/ClassCard";
import "./dashboard.css";
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
							key: itr[i],
						};
						console.log(obj);
						setClasses(classes => [...classes,obj]);
					} else {
						console.log("No data available");
					}
				})
				.then(() => {
					setLoading(false);
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
							pk = {individualClass.key}
						/>
					))}
				</div>
			)}
		</div>
	);
}
export default Dashboard;
