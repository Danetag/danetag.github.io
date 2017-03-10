import React, { Component, PropTypes } from 'react';
import { AbstractStepComponent, TH } from 'abstract/components/Step';

class Ready extends AbstractStepComponent {

	render() {
		const { copy } = this.props;
		console.log('copy', copy);
		return (
			<div id="ready-component" className="component-wrapper" key="welcome-component">
				<div className="content">
					{copy.ready}
				</div>
			</div>
		);
	}
}

export default TH(Ready);
