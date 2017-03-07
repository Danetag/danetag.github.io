import React, { PropTypes, Component } from 'react';
import AbstractLoaderComponent from '../../abstract/components/loader';

import { TweenLite, Cubic, Expo } from 'gsap';

import ReactDOM from 'react-dom';

class PageLoader extends AbstractLoaderComponent {

	constructor(props) {
		super(props);
		this.state = {
			'show': false
		};
	}

  componentWillEnter(callback) {
		const el = ReactDOM.findDOMNode(this);
		// console.log('AbstractLoaderComponent componentWillEnter');
		TweenLite.to(el, 0.3, {autoAlpha: 1, ease: Cubic.easeOut, onComplete: () => this.setState({show: true}) });
		setTimeout(callback, 800);
	}

  render() {
		const { show } = this.state;

    return (
      <div className={` ${ show ? 'show' : '' } loader page-loader `}>
        <span>PageLoader</span>
      </div>
    );
  }
}


export default PageLoader;
