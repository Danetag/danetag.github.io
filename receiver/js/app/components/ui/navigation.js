import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import scripts from '../../../../assets/json/script';

import {
	script,
	navigation
} from 'actions/script';

class Navigation extends Component {

	static propTypes = {
		currentScript: PropTypes.object,
		navigationAction: PropTypes.func.isRequired,
		scriptAction: PropTypes.func.isRequired,
	};

	constructor(props) {
		super(props);
		this.idx = -1;
	}

	onClick(step) {
		const { navigationAction } = this.props;
		navigationAction({data: {step: step}});
	}

	nextStep() {
		this.idx++;
		const script_ = scripts[this.idx];
		const { scriptAction } = this.props;
		if (script_) {
			scriptAction(script_);
		}
	}

	render() {
		const { currentScript } = this.props;
		const currentStep = currentScript && this.idx >= 0 ? <span className="current-step">Current Step : {currentScript.name}</span> : null;
		const currentStepIdx = currentScript && this.idx >= 0 ? <span className="current-idx-step">#Step : {this.idx}</span> : null;
		return (
			<div className="navigation" key="ui-wrapper-component">
				<button onClick={() => this.nextStep()}>Next Step</button>
				{currentStep}
				{currentStepIdx}
				<ul>
					<li><button onClick={() => this.onClick('welcome')}>Welcome</button></li>
					<li><button onClick={() => this.onClick('playlist')}>Playlist</button></li>
				</ul>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
		navigationAction: (step) => {
      dispatch(navigation(step));
    },
		scriptAction: (script_) => {
      dispatch(script(script_));
    }
	};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation);
