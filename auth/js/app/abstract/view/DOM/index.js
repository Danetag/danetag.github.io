import View from 'abstract/view';
import $ from 'webpack-zepto';
import _ from 'underscore';

const delegateEventSplitter = /^(\S+)\s*(.*)$/;

/**
 * DOMView: Defines a view with basic methods for DOM
 * @extends View
 * @constructor
 */
class DOMView extends View {

	/**
   * Object as associative array of all the <DOM.events> objects
   * @type {Object}
   */
  _events = {};

	set events(events) {
		for (const event in events) { // eslint-disable-line guard-for-in
			this._events[event] = events[event];
		}
		this.delegateEvents();
	}

	get events() {
		return this._events;
	}

	/**
   * Object as associative array of all the <DOM.elements> objects
   * @type {Object}
   */
  $els = {};

  /**
   * Object as associative array of all the <DOM.elements> objects
   * @type {Object}
   */
  els = {};

	/**
   * Selector to scope the main element to the view
   * @type {Object}
   */
  selector = null;

	/**
   * main element scoped to the view
   * @type {Object}
   */
  el = null;

	/**
   * main element scoped to the view
   * @type {Object}
   */
  $el = null;

	/**
   * Template if provided
   * @type {Object}
   */
	template = null;

	/**
   * Model if provided
   * @type {Object}
   */
	model = null;

	constructor(options = {}) {
		super();
		this.selector = options.selector ? options.selector : this.selector;
		this.el = options.el ? options.el : this.el;
		this.$el = options.$el ? options.$el : this.$el;
		this.template = options.template ? options.template : this.template;
		this.model = options.model ? options.model : this.model;
	}

	/**
	 * Render your view
	 * This is where we scope the main elements
	 */
	setElement() {
		if (this.$el === null && this.el === null && this.selector === null && this.template === null) {
			console.error('You must provide a template or an el or an $el or a selector to scope a view. Creating an empty div instead', this); // @preserve eslint-disable-line no-console
			this.el = document.createElement('div');
		}

		if (this.el !== null) {
			this.$el = $(this.el);
			return;
		}

		if (this.$el !== null) {
			this.el = this.$el[0];
			return;
		}

		if (this.selector !== null) {
			this.$el = $(this.selector);
			this.el = this.$el[0];
			return;
		}

		if (this.template !== null) {
			this.renderTemplate();
			return;
		}
	}

	/**
	 * Render your template
	 */
	renderTemplate() {
		this.$el = $(this.template(this.model));
		this.el = this.$el[0];
	}

	/**
	 * Init the view.
	 * Override and trigger onInit when we have to wait for computer procesing, like canvas initialization for instance.
	 */
	initView() {
		this.setElement();
		setTimeout(::this.onRender, 0);
	}

	onRender() {
		this.initDOM();
		this.setupDOM();
		this.delegateEvents();
		setTimeout(::this.onDOMInit, 0);
	}

	/**
	 * Init all your DOM elements here
	 */
	initDOM() {}

	/**
	 * Setup your DOM elements here
	 */
	setupDOM() {}

	/**
	 * Init the Timeline here
	 */
	onDOMInit() {
		super.initView();
	}

	/**
	 * Auto binding with this.events
	 */
	delegateEvents() {
    if (this.el === null) return this;
    if (!this.events) return this;
    this.undelegateEvents();
    for (const key in this.events) {
			if (!this.events[key]) continue;
      let method = this.events[key];
      if (!_.isFunction(method)) method = this[method];
      if (!method) continue;
      const match = key.match(delegateEventSplitter);
      this.delegate(match[1], match[2], _.bind(method, this));
    }
    return this;
	}

	/**
	 *  Add a single event listener to the view's element (or a child element
	 *  using `selector`). This only works for delegate-able events: not `focus`,
	 *  `blur`, and not `change`, `submit`, and `reset` in Internet Explorer.
	 */
  delegate(eventName, selector, listener) {
    this.$el.on(eventName + '.delegateEvents' + this.cid, selector, listener);
    return this;
  }

	undelegateEvents() {
		if (this.$el) this.$el.off('.delegateEvents' + this.cid);
		return this;
	}

	/**
	 *  A finer-grained `undelegateEvents` for removing a single delegated event.
	 *  `selector` and `listener` are both optional.
	 */
  undelegate(eventName, selector, listener) {
    this.$el.off(eventName + '.delegateEvents' + this.cid, selector, listener);
    return this;
  }


	/**
	 * Dispose the view
	 */
	dispose() {
		this.undelegateEvents();
		this.$el.remove();
		this.$el = null;
		this.$els = {};
		this._events = {};
		super.dispose();
	}
}

export default DOMView;
