import React, { Component } from "react"
import map from "lodash/map"
import { connect } from "react-redux"

class WeatherInformation extends Component {

	constructor(props) {
		super(props);
	}


	_renderWeatherData(itemsData) {

		const templateRow = (itemsData) => {
			return (

				<div className="weather-widget__content_info-item-wrapper">
					<h3 className="weather-widget__content_second-title">
						{itemsData.title}
					</h3>
					<div className="weather-widget__content_info">
						{itemsData.param}
					</div>
				</div>

			)
		};

		return(
			<div className="weather-widget__content_info-wrapper">
				{map(itemsData, templateRow)}
			</div>
		);
	}

	render() {

		let data, name, icon, temp, weather, wind, clouds, itemsData;

		if (this.props.weatherWidget) {
			data = this.props.weatherWidget.data.data[`${this.props.weatherWidget.cityTab}`];
			name = data.name;
			icon = data.weather["0"].icon;
			temp = Math.round(data.main.temp);
			weather = data.weather["0"].main;
			wind = Math.round(data.wind.speed);
			clouds = data.clouds.all;

			itemsData = [
				{
					title: "Weather",
					param: weather
				},
				{
					title: "Temperature",
					param: `${temp}°C`
				},{
					title: "Wind Speed",
					param: wind
				},
				{
					title: "Clouds",
					param: `${clouds} %`
				}
			];
		}


		return (
			<div className="weather-widget__content">

				<div className="weather-widget__content_city-wrapper">
					<h2 className="weather-widget__content_city">
						{name}
					</h2>
				</div>

				<div className="weather-widget__content_icon">
					<img
						src={require(`./img/icons/${icon}.png`)}
						alt="Weather-Icon"
					/>
				</div>

				{this._renderWeatherData(itemsData)}

			</div>
		);
	}
}

function mapStateToProps (state) {
	return {
		weatherWidget: state.weatherWidget
	}
}

export default connect(mapStateToProps)(WeatherInformation)