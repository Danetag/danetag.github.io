import {
	LOAD_APP_DATA_START,
	LOAD_APP_DATA_SUCCESS,
	LOAD_APP_DATA_ERROR
} from '../constants/action-types';

const initialState = {
	hasFailed: false,
	hasStarted: false,
	hasLoaded: false,
	data: {}
};

export default function pageData(state = initialState, action) {
	switch (action.type) {
		case LOAD_APP_DATA_START: {
			return Object.assign({}, state, {
        hasStarted: true,
				hasFailed: false,
				hasLoaded: false,
				data: {}
      });
		}
		case LOAD_APP_DATA_SUCCESS: {
			return Object.assign({}, state, {
        hasStarted: false,
				hasFailed: false,
				hasLoaded: true,
				data: action.payload.data
      });
		}
		case LOAD_APP_DATA_ERROR: {
			return Object.assign({}, state, {
				hasFailed: true
      });
		}
		default: {
			return state;
		}
	}
}
