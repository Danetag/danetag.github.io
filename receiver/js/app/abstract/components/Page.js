import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { TweenLite, Cubic } from 'gsap';
import transitionHooks  from '../../utils/transitionHooks';
import ReactDOM from 'react-dom';

import { PageHide, PageShown } from '../../actions/page';

class AbstractPageComponent extends Component {
	static propTypes = {
		id: PropTypes.string,
		copy: PropTypes.object,
		assets: PropTypes.array,
		pageHide: PropTypes.func,
		pageShown: PropTypes.func,
		hasShown: PropTypes.bool,
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
		// console.log('PAGE componentDidMount');
		const el = ReactDOM.findDOMNode(this);
		TweenLite.set(el, {autoAlpha: 0});
	}

	shouldComponentUpdate(nextProps, nextState) {
		if (!Object.keys(nextProps.copy).length) return false;
		return true;
	}

	componentWillEnter(callback) {
		const el = ReactDOM.findDOMNode(this);
		setTimeout(() => {
			TweenLite.to(el, 0.7, {autoAlpha: 1, ease: Cubic.easeOut, onComplete: callback});
		}, 0);
	}

	componentWillLeave(callback) {
		const { pageHide } = this.props;
		pageHide();
		const el = ReactDOM.findDOMNode(this);
		TweenLite.to(el, 0.3, {autoAlpha: 0, ease: Cubic.easeOut, onComplete: callback});
	}

	componentDidEnter() {
		const { pageShown } = this.props;
		// console.log('Page: componentDidEnter');
		pageShown(this.props.id);
	}

	render() {
		const { copy, id } = this.props;

		return (
			<section className="step-content" id={id}>
      	<h1>{copy.title}</h1>
			</section>
		);
	}
}

const mapStateToProps = (state, props) => {
  return {
		id: props.step.name,
    copy: state.config[props.step.name].copy || {},
    hasShown: state.config[props.step.name].hasShown || false,
    assets: state.config[props.step.name].assets || [],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
		pageShown: (id) => {
			dispatch(PageShown(id));
		},
		pageHide: () => {
			dispatch(PageHide());
		}
	};
};

const TH = Instance => transitionHooks(connect(
  mapStateToProps,
  mapDispatchToProps
)(Instance));

export { AbstractPageComponent, mapStateToProps, mapDispatchToProps, TH };
