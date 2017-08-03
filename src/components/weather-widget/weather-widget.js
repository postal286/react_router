import React, { Component } from "react"
import { connect } from "react-redux"
import isEqual from "lodash/isEqual"

import { changeCytyTab } from "../../actions/changeCityTab"
import { getWeatherData } from "../../actions/getWeatherData"

import ChangeCityButtons from "./change-city-buttons"
import Spinner from "./spinner"
import WeatherInformation from "./weather-information"

import "./weather-widget.pcss"


class Loader extends React.Component {
	render () {
		return (
			<div>
				{
					!this.props.isReady && <Spinner />
				}
				{
					this.props.isReady && this.props.children
				}
			</div>
		);
	}
}

class WeatherWidget extends Component {

	constructor(props) {
		super(props);
	}

	shouldComponentUpdate(nextProps){
		return !(isEqual(this.props.weatherWidget, nextProps.weatherWidget));
	}

	changeCityTab(index){
		this.props.changeCityTab(index)
	}

	componentDidMount() {
		this.props.getData();
	}

	render() {

		let {data} = this.props.weatherWidget.data || {};
		let style = {textAlign: "center"};

		return (
			<div>
				<h1 className="main-title">Weather Widget Component</h1>

				<Loader isReady={data}>
					<div className="weather-widget__wrapper">
						<div className="weather-widget__wrapper_inner">
							<ChangeCityButtons/>
							<WeatherInformation/>
						</div>
					</div>
				</Loader>

				<h2 className="subtitle" style={style}>Feel free to choose the city to get current forecast for it !</h2>
			</div>
		);
	}
}

function mapStateToProps (state) {
	return {
		weatherWidget: state.weatherWidget
	}
}

function mapDispatchToProps(dispatch) {
	return {
		getData() {
			dispatch(getWeatherData())
		},
		changeCytyTab(index) {
			dispatch(changeCytyTab(index))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherWidget)
