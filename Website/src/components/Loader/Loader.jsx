import React from "react";
import "./Loader.css";
function Loader() {
	return (
		<div id='preloader'>
			<div className='loader-status'>
				<div className='loader-spinner'>
					<div className='loader-double-bounce1' />
					<div className='loader-double-bounce2' />
				</div>
			</div>
		</div>
	);
}

export default Loader;
