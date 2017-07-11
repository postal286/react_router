import React, {Component} from "react";

import { Route, NavLink, Switch, Link} from "react-router-dom";

import "./app.pcss";

import About from "about";
import Home from "home-page";
import Input from "input-digits-filter";
import Tabs from "tabs";
import WeatherWidget from "weather-widget";



const NoMatch = () => (
	<div>
		<h3 className="page-404__title">Page <code>{location.pathname}</code> not found !</h3>
		<Link className="page-404__to-home-link" to="/">To Home Page</Link>
	</div>
);

export default class App extends Component {
	render() {
		return (
			<div className="container">
				<div className="app">

					<nav className="main-nav">
						<NavLink className="main-nav-item" activeClassName="main-nav-item__active" exact to="/">Home</NavLink>
						<NavLink className="main-nav-item" activeClassName="main-nav-item__active" to="/weather-widget">Weather Widget</NavLink>
						<NavLink className="main-nav-item" activeClassName="main-nav-item__active" to="/tabs">Tabs</NavLink>
						<NavLink className="main-nav-item" activeClassName="main-nav-item__active" to="/input">Input</NavLink>
						<NavLink className="main-nav-item" activeClassName="main-nav-item__active" to="/about">About</NavLink>
					</nav>

					<Switch>
						<Route exact path="/" component={Home}/>
						<Route path="/weather-widget" component={WeatherWidget}/>
						<Route path="/tabs" component={Tabs}/>
						<Route path="/input" component={Input}/>
						<Route path="/about" component={About}/>
						<Route component={NoMatch}/>
					</Switch>

				</div>
			</div>
		);
	}
}