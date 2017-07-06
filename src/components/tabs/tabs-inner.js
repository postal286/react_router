import React, { Component } from "react";
import _ from "lodash";

export default class TabsInner extends Component {

	constructor(props) {
		super(props);

		this.state = {
			selected: 0
		};
	}

	shouldComponentUpdate(nextProps, nextState) {
		return this.props !== nextProps || this.state.selected !== nextState.selected;
	}

	handleClick(index, event) {
		event.preventDefault();
		this.setState({
			selected: index
		});
	}

	_renderTitles() {
		const labels = (child, index) => {
			let activeClass = (this.state.selected === index ? "tabs__tab__li_a_active" : "");

			return (
				<li key={index} className="tabs__tab__li">
					<a
						className={activeClass}
						onClick={this.handleClick.bind(this, index)}>
						{child.props.label}
					</a>
				</li>
			);
		};

		return (
			<ul className="tabs__tab">
				{_.map(this.props.children, labels)}
			</ul>
		);
	}

	_renderContent() {
		return (
			<div className="tab_content">
				{this.props.children[this.state.selected]}
			</div>
		);
	}

	render() {
		return (
			<div className="tabs">
				{this._renderTitles()}
				{this._renderContent()}
			</div>
		);
	}
}
