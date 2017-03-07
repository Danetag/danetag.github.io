import {
	CAST_NAVIGATION,
	CAST_READY,
	STEP_SHOWN,
	STEP_HIDE
} from '../constants/action-types';

const initialState = {
	step: 'welcome',
	isReady: false,
	currentStepIsShown: false
};

export default function navigation(state = initialState, action) {
	switch (action.type) {
		case CAST_READY: {
			return Object.assign({}, state, {
				isReady: true
			});
		}
		case CAST_NAVIGATION: {
			return Object.assign({}, state, {
				step: action.name
			});
		}
		case STEP_SHOWN: {
			return Object.assign({}, state, {
        currentStepIsShown: true
      });
		}
		case STEP_HIDE: {
			return Object.assign({}, state, {
        currentStepIsShown: false
      });
		}
		default: {
			return state;
		}
	}
}
