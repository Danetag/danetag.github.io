import React, { Component, PropTypes } from 'react';

class Welcome extends Component {

	static propTypes = {}

	render() {
		return (
			<div id="welcome-component" className="componenent-wrapper" key="welcome-component">
				Welcome
			</div>
		);
	}
}

export default Welcome;
