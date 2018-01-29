import React, { Component } from 'react';
import ReactSVG from 'react-svg';

class Loader extends Component {
	render() {
		return (
			<div className="page-container">
				<div className="center">
					<ReactSVG
						path="../img/ball-triangle.svg"
						className="burger"
					/>
				</div>
			</div>
		);
	}
}

export default Loader;