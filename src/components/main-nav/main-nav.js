import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./main-nav.pcss";

export class MainNav extends Component {
	render() {
		return (
			<nav className="main-nav">
				<Link className="main-nav-item" exact to="/">Home</Link>
				<Link className="main-nav-item" to="/weather-widget">Weather Widget</Link>
				<Link className="main-nav-item" to="/tabs">Tabs</Link>
				<Link className="main-nav-item" to="/input">Input</Link>
				<Link className="main-nav-item" to="/about">About</Link>
			</nav>
		);
	}
}