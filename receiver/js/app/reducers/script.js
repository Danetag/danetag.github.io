import {
	SCRIPT,
} from '../constants/action-types';

const initialState = {
	currentScript: null,
};

export default function script(state = initialState, action) {
	switch (action.type) {
		case SCRIPT: {
			return Object.assign({}, state, {
				currentScript: action.script
			});
		}
		default: {
			return state;
		}
	}
}
