import Watcher from 'abstract/watcher';
import Layout from 'components/app/Layout';

import HomepageView from 'components/pages/homepage';
import ScenarioView from 'components/pages/scenario';

import {
	HOMEPAGE,
	SCENARIO
} from 'constants/locations';

class App extends Watcher {

	view = null;
	viewName = null;
	layout = null;

	constructor() {
		super();

		this.watchers = {
			'location.viewName': ::this.onLocationChanged
		};
	}

	init() {
		this.layout = new Layout({ el: document.body });
		return this.layout.init();
	}

	onLocationChanged(viewName, prevviewName, objectPath) {
		// should never happens anyway
		if (this.viewName === viewName) return;

		if (this.view !== null) {
			this.view.hide()
				.then(() => {
					this.view.dipose();
					this.renderPage_(viewName);
				});
		} else {
			this.renderPage_(viewName);
		}
	}

	renderPage_(viewName) {
		switch(viewName) {
			case HOMEPAGE : this.view = new HomepageView(); break;
			case SCENARIO : this.view = new ScenarioView(); break;
			default: this.view = null;
		}

		if (this.view === null) {
			console.error('Errro: view is null');
			return;
		}

		this.view.init()
			.then(() => {
				this.view.show();
			})
			.then(() => {
				console.log('page view is shown !!');
			});
	}

}

export default App;
