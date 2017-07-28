import React, { Component } from "react"
import _ from "lodash"
import { connect } from "react-redux"
import { changeTab } from "../../actions/changeTab.js"

class TabsInner extends Component {

	constructor(props) {
		super(props);
	}

	handleClick(index) {
		this.props.dispatch(changeTab(index));
	}

	_renderTitles() {
		const labels = (child, index) => {
			let activeClass = (this.props.selected === index ? "tabs__tab__li_a_active" : "");

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
				{this.props.children[this.props.selected]}
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

function mapStateToProps (state) {
  return {
    selected: state.tabs.selected
  }
}

export default connect(mapStateToProps)(TabsInner)
