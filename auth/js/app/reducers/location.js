import {
	NAVIGATION
} from 'constants/locations';

const initialState = {
	viewName: null,
	scenarioID: null
};

export default function location(state = initialState, action) {
	switch (action.type) {
		case NAVIGATION: {
			return Object.assign({}, state, {
				viewName: action.viewName,
				scenarioID: action.scenarioID || null
      });
		}
		default: {
			return state;
		}
	}
}
