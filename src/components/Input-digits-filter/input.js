import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./input.pcss";

export class Input extends Component {
	constructor(props) {
		super(props);

		this.state = {
			value: ""
		};

		this.onInputChange = this.onInputChange.bind(this);
		this.clearInputValue = this.clearInputValue.bind(this);
		this.filterInputValue = this.filterInputValue.bind(this);
	}

	componentDidMount() {
		ReactDOM.findDOMNode(this.refs.firstInput).focus();
	}

	onInputChange(e) {
		this.setState({
			value: e.target.value
		});
	}

	clearInputValue(){
		this.setState({
			value: ""
		});
	}

	filterInputValue () {

		let	currentInputValue = this.state.value,
				regExpPat = /\d/g,
				newInputValueArray = currentInputValue.match(regExpPat),
				newInputValue;

		if (newInputValueArray) {
			newInputValue = newInputValueArray.join("");
		} else {
			newInputValue = "";
		}

		this.setState({
			value: newInputValue
		});
	}

	render() {
		return (
			<div>
				<h1 className="main-title">Little Component Input</h1>
				<h2 className="subtitle">Type something in and it automatically returns only numbers onblur !</h2>
				<input placeholder='Type something...'
							 onBlur={this.filterInputValue}
							 value={this.state.value}
							 onChange={this.onInputChange}
							 className='valid-input'
							 ref='firstInput'
				/>
				<button
					onClick={this.clearInputValue}
					className="input-clear"
				>
					Clear Input
				</button>
			</div>
		);
	}
}