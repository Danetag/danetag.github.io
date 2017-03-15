import AmpersandRouter from 'ampersand-router';
import store from 'store';
import {
	navigate,
	navigateScenario
} from 'actions/location';

import {
	HOMEPAGE,
	SCENARIO
} from 'constants/locations';

const routes = {

	routes: {
		'': 'homepage',
		'scenario/:scenario': 'scenario',
	},

	homepage() {
		store.dispatch(navigate(HOMEPAGE));
	},

	scenario(scenario_) {
		store.dispatch(navigateScenario(scenario_));
	}

};

export default AmpersandRouter.extend(routes);
