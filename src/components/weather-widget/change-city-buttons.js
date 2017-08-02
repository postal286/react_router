import React, { Component } from "react"
import map from "lodash/map"
import {connect} from "react-redux"

import changeCityTab from "../../actions/changeCityTab"

class ChangeCityButtons extends Component {

	constructor(props){
		super(props);
	}

	changeCityTab(index) {
		// console.log(this.props)
		this.props.changeCityTab(index);
	}

	render(){

		const {weatherWidget} = this.props;
		const cities = weatherWidget.data.data;
		const buttonClassName = "weather-widget__button";
		const currentTab = weatherWidget.cityTab;

		const buttons = map(cities, (weatherWidget, index) =>
			<a
				key={index}
				className={(currentTab === index) ? `${buttonClassName} weather-widget__current-city` : `${buttonClassName}`}
				onClick={this.changeCityTab.bind(this, index)}
			>{cities[index].name}</a>
		);

		return (
			<div className="weather-widget__buttons-wrapper">
				{buttons}
			</div>
		);
	}
}


function mapStateToProps	(state){
	return {
		weatherWidget: state.weatherWidget
	}
}

function mapDispatchToProps	(dispatch){
	return {
		changeCityTab(index) {
			dispatch(changeCityTab(index))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangeCityButtons)

