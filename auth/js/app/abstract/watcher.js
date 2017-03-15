import store from 'store';
import watch from 'redux-watch';

class Watcher {

	/**
   * Object as associative array of all <watcher> objects
   * @type {Object}
   */
	_watchers = {};

	set watchers(watchers) {
		for (const objectPath in watchers) {
			if (!watchers[objectPath]) continue;
			this._watchers[objectPath] = watchers[objectPath];
		}
		this.subscribe();
	}

	get watchers() {
		return this._watchers;
	}

	/**
   * Object as associative array of all <subscriptions> objects
   * @type {Object}
   */
	subscriptions = {};

	dispose() {
		this.unsubscribe();
	}

	subscribe() {
		for (const path in this.watchers) {
			if (!this.watchers[path]) continue;
			if (this.subscriptions[path]) this.subscriptions[path]();
			let method = this.watchers[path];
      if (typeof method !== 'function') method = this[method];
      if (!method) continue;

			const watcher = watch(store.getState, path);
			this.subscriptions[path] = store.subscribe(watcher(method));
		}
	}

	unsubscribe() {
		for (const path in this.subscriptions) {
			if (!this.subscriptions[path]) continue;
			this.subscriptions[path]();
		}
		this.subscriptions = {};
	}

	getState() {
		return store.getState();
	}

	dispatch(action) {
		store.dispatch(action());
	}
}

export default Watcher;
