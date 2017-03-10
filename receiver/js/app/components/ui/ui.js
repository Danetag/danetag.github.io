import React, { Component, PropTypes } from 'react';

import Navigation from './navigation';

class UI extends Component {

	static propTypes = {
		script: PropTypes.object
	}

	render() {
		const { script } = this.props;
		const navigation = (process.env.NODE_ENV === 'development' || window.location.hash === '#dev') ? <Navigation currentScript={script} /> : null;
		return (
			<div id="ui-wrapper" key="ui-wrapper-component">
				{navigation}
			</div>
		);
	}
}

export default UI;
