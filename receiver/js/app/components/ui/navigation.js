import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import scripts from '../../../../assets/json/script';

import {
	script
} from 'actions/script';

class Navigation extends Component {

	static propTypes = {
		currentScript: PropTypes.object,
		scriptAction: PropTypes.func.isRequired,
	};

	constructor(props) {
		super(props);
		this.idx = -1;
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
		const currentStep = currentScript && this.idx >= 0 ? <span className="current-step">Current Step : {currentScript.action}</span> : null;
		const currentStepIdx = currentScript && this.idx >= 0 ? <span className="current-idx-step">#Step : {this.idx}</span> : null;
		return (
			<div className="navigation" key="ui-wrapper-component">
				<button onClick={() => this.nextStep()}>Next Step</button>
				{currentStepIdx}
				{currentStep}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
		scriptAction: (script_) => {
      dispatch(script(script_));
    }
	};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation);
