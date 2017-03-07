import React, { PropTypes, Component } from 'react';
import AbstractLoaderComponent from '../../abstract/components/loader';

import { TweenLite, TimelineLite } from 'gsap';
import ReactDOM from 'react-dom';

class MainLoader extends AbstractLoaderComponent {

	componentDidMount() {
		const el = ReactDOM.findDOMNode(this);
		TweenLite.set(el, {autoAlpha: 0});
	}

	componentWillEnter(callback) {
		const el = ReactDOM.findDOMNode(this);
		const TLshow = new TimelineLite({paused: true, onComplete: callback});
		TLshow.to(el, 0.3, {autoAlpha: 1});

		setTimeout(() => TLshow.play(0), 0);
	}

  render() {
    const { config } = this.props;

    return (
      <div className="loader main-loader">
        <div className="text-container" ref="textContainer">
					<div className="v-align">
						<span className="subhead" ref="subhead">Loading</span>
					</div>
				</div>
      </div>
    );
  }
}

export default MainLoader;
