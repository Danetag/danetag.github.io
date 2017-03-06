import _ from 'underscore';
import Watcher from 'abstract/watcher';

/**
 * View: Defines a view with basic methods
 * @constructor
 */
class View extends Watcher {

  /**
   * Object as associative array of all the <Timeline> objects
   * @type {Object}
   */
  TL = {};

	/**
   * Object as associative array of all the <handlers> objects
   * @type {Object}
   */
  handlers = {};

	/**
   * Object as associative array of all the <promises> objects
   * @type {Object}
   */
  promises = {
		init: {
			resolve: null,
			reject: null
		},
		show: {
			resolve: null,
			reject: null
		},
		hidden: {
			resolve: null,
			reject: null
		}
	};

	/**
   * Object as associative array of all the states
   * @type {Object}
   */
	_states = {}

	set states(states) {
		for (const state in states) { // eslint-disable-line guard-for-in
			this._states[state] = states[state];
		}
	}

	get states() {
		return this._states;
	}

	/**
   * uniqueId
   * @type {String}
   */
  cid = null;

	/**
   * raf id
   * @type {String}
   */
	rafID = null;

	constructor() {
		super();

		this.states = {
			canUpdate: false,
			isInit: false,
			isShown: false
		};

		this.watchers = {
			'browser.width': ::this.onResize,
			'browser.height': ::this.onResize,
			'browser.is': ::this.onResize,
			'window.scroll': ::this.onScroll,
		};

		this.cid = _.uniqueId('view');
	}

	/**
	 * Init
	 * @return Promise a Promise the view is init
	 */
	init() {
		return new Promise((resolve, reject) => {
			this.promises.init.resolve = resolve;
			this.promises.init.reject = reject;

			const { isInit } = this.states;

			if (isInit) {
				this.promises.init.reject();
				return;
			}

			this.initView();
		});
	}

	/**
	 * Init the view.
	 * Override and trigger onInit when we have to wait for computer procesing, like canvas initialization for instance.
	 */
	initView() {
		this.initTL();
		this.bindUpdate();
		this.bindEvents();
		this.onInit();
	}

	/**
	 * Once the view is init
	 */
	onInit() {
		this.setState({ isInit: true, canUpdate: true});
		this.promises.init.resolve();
	}

	bindUpdate() {
		this.handlers.raf = ::this.update;
		this.rafID = window.requestAnimationFrame(this.handlers.raf);
	}

	/**
	 * Init the Timeline here
	 */
	initTL() {}

	/**
	 * Bind yout events here
	 */
	bindEvents() {}

	/**
	 * Unbind yout events here
	 */
	unbindEvents() {}

	/**
	 * Unbind update
	 */
	unbindUpdate() {
		window.cancelAnimationFrame(this.rafID);
	}

	setState(partialState = {}, callback) {
		if (
	    typeof partialState !== 'object' &&
	    typeof partialState !== 'function' &&
	    partialState !== null
  	) {
			console.error('setState(...): takes an object of state variables to update or a ' +
	    'function which returns an object of state variables.');
			return;
		}

		for (const key in partialState) {  // eslint-disable-line guard-for-in
			this.states[key] = partialState[key];
		}

		if (callback) callback();
		this.render();
	}

	/**
	 * Called on request animation frame
	 */
	update() {
		if (this.states.canUpdate) this.onUpdate();
		this.rafID = window.requestAnimationFrame(this.handlers.raf);
	}

	/**
	 * Called on scroll
	 */
	onScroll() {}

	/**
	 * Called on update
	 */
	onUpdate() {}

	/**
	 * Called on orientation change
	 */
	onOrientationChange() {}

	/**
	 * Called on resize
	 */
	onResize() {}

	/**
	 * Call render function if you wanna change the view
	 * based on states/data
	 */
	render() {}

	/**
	 * Show the view
	 */
	show() {
		return new Promise((resolve, reject) => {
			this.promises.show.resolve = resolve;
			this.promises.show.reject = reject;
			this.setState({ canUpdate: true });
			this.showView();
		});
	}

	showView() {
		this.onShown();
	}

	/**
	 * The view is shown
	 */
	onShown() {
		this.setState({ isShown: true });
	  this.promises.show.resolve();
	}

	/**
	 * Hide the view
	 */
	hide() {
		return new Promise((resolve, reject) => {
			this.promises.show.resolve = resolve;
			this.promises.show.reject = reject;
			this.hideView();
		});
	}

	hideView() {
		this.onHidden();
	}

	/**
	 * The view is shown
	 */
	onHidden() {
		this.setState({ isShown: true, canUpdate: false });
	  this.promises.hide.resolve();
	}

	/**
	 * Dispose the view
	 */
	dispose() {
		this.setState({ isInit: false, isShown: true, canUpdate: false });
		this.unbindEvents();
		this.unbindUpdate();
	  this.destroyTL();
		this.handlers = {};
		this.promises = {};
		this.super();
	}

	/**
	 * Kill a timeline by name
	 * @param {string} name of the timeline stocked in this.TL.
	 */
	killTL(name) {
	  if (this.TL[name] === undefined || this.TL[name] === null) return;

	  let tl = this.TL[name];

	  tl.stop();
	  tl.kill();
	  tl.clear();
	  tl = null;

	  this.TL[name] = null;
	}

	/**
	 * Kill all the timelines
	 */
	destroyTL() {
	  for(const name in this.TL) {
	    if (this.TL[name]) this.killTL(name);
	  }
	  this.TL = {};
	}

}

export default View;
