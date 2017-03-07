import React, { Component, PropTypes } from 'react';

class Welcome extends Component {

	static propTypes = {
		user: PropTypes.object
	}

	render() {
		const { user } = this.props;
		return (
			<div id="welcome-component" className="component-wrapper" key="welcome-component">
				Welcome {user.name}
			</div>
		);
	}
}

export default Welcome;
