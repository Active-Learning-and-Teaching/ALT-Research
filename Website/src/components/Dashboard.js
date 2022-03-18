import React, { useEffect } from "react";
import "./dashboard.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ClassCard from "../components/ClassCard";



function Dashboard() {
	//   const [user, loading, error] = useAuthState(auth);
	const [classes, setClasses] = useState([]);
	//   const history = useHistory();
	//   const fetchClasses = async () => {
	//     try {
	//       await db
	//         .collection("users")
	//         .where("uid", "==", user.uid)
	//         .onSnapshot((snapshot) => {
	//           setClasses(snapshot?.docs[0]?.data()?.enrolledClassrooms);
	//         });
	//     } catch (error) {
	//       console.error(error.message);
	//     }
	//   };
	//   useEffect(() => {
	//     if (loading) return;
	//     if (!user) history.replace("/");
	//   }, [user, loading]);

	//   useEffect(() => {
	//     if (loading) return;
	//     fetchClasses();
	//   }, [user, loading]);

	let hex = [
		{ creatorName: "Jalote", name: "IP", id: "CSE101" },
		{ creatorName: "Jal", name: "IP1", id: "CSE103" },
		{ creatorName: "Shreeya", name: "PRO", id: "FUCK101" }
	];

	return (
		<div className="dashboard">
			{classes?.length < 0 ? (
				<div className="dashboard__404">
					No classes found! Join or create one!
				</div>
			) : (
				<div className="dashboard__classContainer">
					{hex.map((individualClass) => (
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
