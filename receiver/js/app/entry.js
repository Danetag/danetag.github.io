// import 'babel-polyfill';
import $ from 'webpack-zepto';
import Cast from 'models/cast';
import App from 'components/App';

class Entry {

	constructor() {
		console.log('--- APP ---'); // @preserve eslint-disable-line no-console
		console.log('\n\n\n'); // @preserve eslint-disable-line no-console
		this.cast = null;
		this.app = null;
	}

	init() {
		this.cast = new Cast();
		this.cast.init().then(() => {
			this.app = new App();
			this.app.init()
				.then(() => {
					this.app.layout.show();
				})
				.then(() => {
					console.log('showed!');
				});
		});
	}

}

// initialize the APP do not make a global reference to it.
const entry = module.exports = new Entry();
$(document).ready(::entry.init);
