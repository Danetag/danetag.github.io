import React, { Component, PropTypes } from 'react';
import { AbstractStepComponent, TH } from 'abstract/components/Step';

class Welcome extends AbstractStepComponent {

	static propTypes = {
		user: PropTypes.object
	}

	render() {
		const { user, copy } = this.props;
		// console.log('copy', copy, 'user', user);
		return (
			<div id="welcome-component" className="component-wrapper" key="welcome-component">
				<div className="content">
					<h1>{copy.welcome}, {user.name}!</h1>
					<p className="subhead">{copy.subhead}</p>
					<p className="tips">{copy.tips}</p>
				</div>
			</div>
		);
	}
}

export default TH(Welcome);
