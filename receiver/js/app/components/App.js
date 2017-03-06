import Watcher from 'abstract/watcher';
import Layout from 'components/app/Layout';

class App extends Watcher {

	page = null;
	layout = null;

	constructor() {
		super();

		this.watchers = {
			'location.view': ::this.onLocationChanged
		};
	}

	init() {
		this.layout = new Layout({ el: document.body });
		return this.layout.init();
	}

	onLocationChanged(page, prevPage, objectPath) {
		// should never happens anyway
		if (this.page === page) return;

		if (this.page !== null) {
			this.page.hide()
				.then(() => {
					this.page.dipose();
					this.renderPage_(page);
				});
		} else {
			this.renderPage_(page);
		}
	}

	renderPage_(page) {
		this.page = new page();
		this.page.init()
			.then(() => {
				this.page.show();
			})
			.then(() => {
				console.log('page is shown');
			});
	}

}

export default App;
