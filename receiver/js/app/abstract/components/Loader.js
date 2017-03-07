import React, { Component, PropTypes } from 'react';
import { TweenLite, Cubic, Expo } from 'gsap';
import ReactDOM from 'react-dom';

class AbstractLoaderComponent extends Component {
	static propTypes = {
		pct: PropTypes.number,
		// transitions
		componentWillAppear: PropTypes.func,
		componentWillEnter: PropTypes.func,
		componentDidAppear: PropTypes.func,
		componentDidEnter: PropTypes.func,
		componentWillLeave: PropTypes.func,
		componentDidLeave: PropTypes.func,
	};

	constructor(props) {
		super(props);
		this.props.componentWillAppear(::this.componentWillEnter);
    this.props.componentWillEnter(::this.componentWillEnter);
    this.props.componentWillLeave(::this.componentWillLeave);
	}

	componentDidMount() {
		// init before 1st render
		const el = ReactDOM.findDOMNode(this);
		// console.log('AbstractLoaderComponent componentDidMount');
		TweenLite.set(el, {autoAlpha: 0});
	}

	componentWillEnter(callback) {
		const el = ReactDOM.findDOMNode(this);
		// console.log('AbstractLoaderComponent componentWillEnter');
		TweenLite.to(el, 0.3, {autoAlpha: 1, ease: Cubic.easeOut, onComplete: callback});
	}

	componentWillLeave(callback) {
		const el = ReactDOM.findDOMNode(this);
		setTimeout(() => {
			TweenLite.to(el, 0.7, {autoAlpha: 0, ease: Expo.easeOut, onComplete: callback});
		}, 0);
	}
}

export default AbstractLoaderComponent;
