import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import createjs from 'preload-js';
import Detectizr from 'detectizr';
import { ASSETS_DIR } from '../../constants/config';

class AbstractLoaderContainer extends Component {

	static propTypes = {
		items: PropTypes.array.isRequired,
		load: PropTypes.bool.isRequired,
		onFileStart: PropTypes.func,
		onFileLoad: PropTypes.func,
		onLoadStart: PropTypes.func,
		onComplete: PropTypes.func,
		onProgress: PropTypes.func,
		onError: PropTypes.func,
		// transitions
		componentWillAppear: PropTypes.func,
		componentWillEnter: PropTypes.func,
		componentDidAppear: PropTypes.func,
		componentDidEnter: PropTypes.func,
		componentWillLeave: PropTypes.func,
	};

	constructor(props) {
		super(props);
		/*
		 * Instance of createjs preloader
		 * @type {LoadQueue}
		 */
		this.queue  = new createjs.LoadQueue(false, '', true);
	}

	componentWillMount() {
		this.setState({pct: 0, hasStarted: false});
	}

	componentDidMount() {
		this.bindEvents();
	}

	componentDidUpdate(prevProps, prevState) {
		if (!this.state.hasStarted && this.props.load) this.load();
	}

	// componentWillEnter(callback) {
	// 	console.log('AbstractLoaderContainer componentWillEnter');
	// 	callback();
	// }
	//
	// componentWillLeave(callback) {
	// 	console.log('AbstractLoaderContainer componentWillLeave');
	// 	callback();
	// }

	componentDidUnMount() {
		this.unbindEvents();
		this.queue.destroy();
		this.queue = null;
	}

	bindEvents() {
		this.queue.addEventListener('fileload',  ::this.onFileLoad_);
	  this.queue.addEventListener('filestart', ::this.onFileStart_);
	  this.queue.addEventListener('loadstart', ::this.onLoadStart_);
	  this.queue.addEventListener('complete',  ::this.onComplete_);
	  this.queue.addEventListener('progress',  ::this.onProgress_);
	  this.queue.addEventListener('error',     ::this.onError_);
	}

	unbindEvents() {
		this.queue.removeAllEventListeners();
	}

	load() {
		// console.log('---load');
		this.setState({hasStarted: true});

		this.initItems();

		if (this.props.items.length === 0) {
			// console.log('nothing to load !');
			this.onFileStart_();
			this.onComplete_();
			return;
		}

		// if mobile and srcMobile exists, use it
		if (Detectizr.device.type === 'mobile') {
			this.props.items.map((item) => {
				item.src = item.srcMobile ? item.srcMobile : item.src;
			});
		}

		// update src to match the CDN
		// if (window.location.hostname &&
		// 	window.location.hostname !== 'wpost.dev.stinkstudios.nyc' &&
		// 	window.location.hostname !== 'localhost' &&
		// 	window.location.hostname === 'wpbs-template-full.dev') {
				this.props.items.map((item) => {
					item.src = item.src.replace('dist/', ASSETS_DIR);
					// item.src = item.src.replace('dist/', 'https://www.washingtonpost.com/wp-stat/ad/public/static/brandconnect/Cleveland-clinic-empathy/');
				});
		// }


		this.queue.loadTimeout = 999999; // Time in milliseconds to assume a load has failed.
	  this.queue.loadManifest(this.props.items);
	}

	initItems() {
		this.props.items.map(item => {
			if (!item.src) delete this.props.items;
		});
	}

	getItem(id) {
		for (const i in this.props.items) {
	    if (!this.props.items[i]) continue;
			const item = this.props.items[i];

	    if (item.id !== null && item.id === id) {
	      return item;
	    }
	  }
		return null;
	}

	onFileLoad_(e) {
		// Find asset and store result
		for (const i in this.props.items) {
	    if (!this.props.items[i]) continue;
			const item = this.props.items[i];
	    if (item.id !== null && item.id === e.item.id) {
	      item.result = e.result;
	      item.raw = e.rawResult;
	      break;
	    }
	  }
		if (this.props.onFileStart) this.props.onFileStart(e);
	}

	onFileStart_(e) {
		if (this.props.onFileStart) this.props.onFileStart(e);
	}

	onLoadStart_(e) {
		if (this.props.onLoadStart) this.props.onLoadStart(e);
	}

	onProgress_(e) {
		const pct = Math.round(e.progress * 100);
		this.setState({pct: pct});
	}

	onComplete_() {
		this.setState({pct: 100});
		if (this.props.onComplete) this.props.onComplete({items: this.props.items});
	}

	onError_(e) {
		if (this.props.onError) this.props.onError(e);
	}

	render() {
		return <div className="abstract-loader"></div>;
	}

}

export default AbstractLoaderContainer;
