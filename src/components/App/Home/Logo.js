import React, { Component } from 'react';
import ReactSVG from 'react-svg';

class Logo extends Component {
	render() {
		return (
			<div className="logo">
				<div>
					<ReactSVG
						path="./img/burger_2.svg"
						className="burger"
					/>
				</div>
				<h1>BURGR</h1>
			</div>
		);
	}
}

export default Logo;