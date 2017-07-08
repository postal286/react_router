import React, {Component} from "react";

import { Route, Link } from "react-router-dom";

import "./App.pcss";

import About from "./components/about/index";
import Home from "./components/home-page/index";
import Input from "./components/input-digits-filter/index";
import Tabs from "./components/tabs/index";
import WeatherWidget from "./components/weather-widget/index";

export default class App extends Component {
	render() {
		return (
			<div className="container">
				<div className="app">

					<nav className="main-nav">
						<Link className="main-nav-item" exact to="/">Home</Link>
						<Link className="main-nav-item" to="/weather-widget">Weather Widget</Link>
						<Link className="main-nav-item" to="/tabs">Tabs</Link>
						<Link className="main-nav-item" to="/input">Input</Link>
						<Link className="main-nav-item" to="/about">About</Link>
					</nav>

					<div>
						<Route exact path="/" component={Home}/>
						<Route path="/weather-widget" component={WeatherWidget}/>
						<Route path="/tabs" component={Tabs}/>
						<Route path="/input" component={Input}/>
						<Route path="/about" component={About}/>
					</div>

				</div>
			</div>
		);
	}
}