import React, { Suspense } from "react";
import Loader from "../Loader/Loader";
import Navi from "./navbar";

function Layout({ children }) {
	return (
		<div className='parent-container'>
			<Suspense fallback={Loader()} />
			<div className='layout'>
				<div className='header-container'>
					<Navi />
				</div>
				<div className='content-container'>{children}</div>
			</div>
		</div>
	);
}

export default Layout;
