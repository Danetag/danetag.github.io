import React, { Component, PropTypes } from 'react';
import { AbstractStepComponent, TH } from 'abstract/components/Step';

class Save extends AbstractStepComponent {

	static propTypes = {
		user: PropTypes.object,
		namePlaylist: PropTypes.string
	}

	SaveCpt() {
		const { copy, user, namePlaylist} = this.props;

		if (namePlaylist === null) {
			return (<div className="asking">
				<h1>{copy.title}</h1>
			</div>);
		}

		return (<div className="saved">
				<h1 className="title">{namePlaylist}</h1>
				<p className="saved-copy">{copy.saved}</p>
				<p className="tips">
					{copy.tips}
					<span className="command">
						{copy.commandP1} <span className="name-playlist">{namePlaylist}</span> {copy.commandP2}
					</span>
				</p>
		</div>
		);
	}

	render() {
		const { copy, user, namePlaylist} = this.props;

		return (
			<div id="save-component" className="component-wrapper" key="save-component">
				<div className="content">
					{this.SaveCpt()}
				</div>
			</div>
		);
	}
}

export default TH(Save);
