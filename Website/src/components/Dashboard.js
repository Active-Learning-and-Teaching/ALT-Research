import React from "react";
import { useState ,useEffect} from 'react';
import Navi from "./navbar";

export default function Dashboard() {
	return (
		<div>
			<Navi></Navi>
			<h1>Dashboard</h1>
		</div>
	);
}
