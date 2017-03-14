import {
	LOAD_CONFIG_START,
	LOAD_CONFIG_SUCCESS,
	LOAD_CONFIG_ERROR
} from '../constants/action-types';

const initialState = {
	hasFailed: false,
	hasStarted: false,
	hasLoaded: false,
	mainloader: {},
	menu: [],
	welcome: {},
	ready: {},
	save: {},
	playlist: {}
};

export default function config(state = initialState, action) {
	switch (action.type) {
		case LOAD_CONFIG_START: {
			return Object.assign({}, state, {
        hasStarted: true
      });
		}
		case LOAD_CONFIG_SUCCESS: {
			return Object.assign({}, state, {
        hasStarted: false,
				hasFailed: false,
				hasLoaded: true,
				mainloader: action.payload.mainloader,
				menu: action.payload.menu,
				ready: action.payload.ready,
				welcome: action.payload.welcome,
				save: action.payload.save,
				playlist: action.payload.playlist
      });
		}
		case LOAD_CONFIG_ERROR: {
			return Object.assign({}, state, {
				hasFailed: true
      });
		}
		default: {
			return state;
		}
	}
}
