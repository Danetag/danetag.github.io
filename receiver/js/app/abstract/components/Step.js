import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { TweenLite, Cubic } from 'gsap';
import transitionHooks  from 'utils/transitionHooks';
import ReactDOM from 'react-dom';

class AbstractStepComponent extends Component {

	static propTypes = {
		// id: PropTypes.string,
		copy: PropTypes.object,
		config: PropTypes.object,
		assets: PropTypes.array,
		// stepHide: PropTypes.func,
		// stepShown: PropTypes.func,
		// hasShown: PropTypes.bool,
		componentWillAppear: PropTypes.func,
		componentWillEnter: PropTypes.func,
		componentDidAppear: PropTypes.func,
		componentDidEnter: PropTypes.func,
		componentWillLeave: PropTypes.func,
	};

	constructor(props) {
		super(props);
		this.props.componentWillAppear(::this.componentWillEnter);
    this.props.componentWillEnter(::this.componentWillEnter);
    this.props.componentDidAppear(::this.componentDidEnter);
    this.props.componentDidEnter(::this.componentDidEnter);
    this.props.componentWillLeave(::this.componentWillLeave);
	}

	componentDidMount() {
		// init before 1st render
		// console.log('step componentDidMount', this);
		const el = ReactDOM.findDOMNode(this);
		TweenLite.set(el, {autoAlpha: 0});
	}

	shouldComponentUpdate(nextProps, nextState) {
		if (!Object.keys(nextProps.copy).length) return false;
		return true;
	}

	componentWillEnter(callback) {
		// console.log('step componentWillEnter', this);
		const el = ReactDOM.findDOMNode(this);
		setTimeout(() => {
			TweenLite.to(el, 0.7, {autoAlpha: 1, ease: Cubic.easeOut, onComplete: callback});
		}, 0);
	}

	componentWillLeave(callback) {
		// console.log('step componentWillLeave', this);
		// const { stepHide } = this.props;
		// stepHide();
		const el = ReactDOM.findDOMNode(this);
		TweenLite.to(el, 0.3, {autoAlpha: 0, ease: Cubic.easeOut, onComplete: callback});
	}

	componentDidEnter() {
		// const { stepShown } = this.props;
		// console.log('step: componentDidEnter');
		// stepShown(this.props.id);
	}

	render() {
		const { copy } = this.props;

		return (
			<section className="step-content">
      	<h1>{copy.title}</h1>
			</section>
		);
	}
}

const mapStateToProps = (state, props) => {
  return {
		// id: props.step.name,
    copy: props.config.copy || {},
    // hasShown: state.config[props.step.name].hasShown || false,
    assets: props.config.assets || [],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
		// stepShown: (id) => {
		// 	dispatch(stepShown(id));
		// },
		// stepHide: () => {
		// 	dispatch(stepHide());
		// }
	};
};

const TH = Instance => transitionHooks(connect(
  mapStateToProps,
  mapDispatchToProps
)(Instance));

export { AbstractStepComponent, mapStateToProps, mapDispatchToProps, TH };
