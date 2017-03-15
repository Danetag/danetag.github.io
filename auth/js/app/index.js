import $ from 'webpack-zepto';
import Router from 'router';
import App from 'components/App';
import Modernizr from 'Modernizr';

class Entry {

	constructor() {
		console.log('--- APP ---'); // @preserve eslint-disable-line no-console
		console.log('\n\n\n'); // @preserve eslint-disable-line no-console
		this.router = null;
		this.app = null;
	}

	init() {
		this.app = new App();
		this.app.init()
			.then(() => {
				this.app.layout.show();
			})
			.then(() => {
				this.router = new Router();
				const match = this.router.history.start({
					root: '/' + window.location.pathname,
					pushState: false
				});
				console.log('match', match);
			});
	}

}

// initialize the APP do not make a global reference to it.
const entry = module.exports = new Entry();
$(document).ready(::entry.init);
