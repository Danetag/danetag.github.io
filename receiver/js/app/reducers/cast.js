import {
	CAST_NAVIGATION,
	CAST_READY,
	CAST_REQUEST,
	CAST_USER_INFO,
	STEP_SHOWN,
	STEP_HIDE
} from '../constants/action-types';

const initialState = {
	step: 'ready',
	isReady: false,
	currentStepIsShown: false,
	user: {},
	data: {
		params: {},
		currentIdxSong: 0,
		currentPlaylist: {
			tracks: []
		},
	},
	error: {
		status: 0
	}
};

export default function cast(state = initialState, action) {
	switch (action.type) {
		case CAST_READY: {
			return Object.assign({}, state, {
				isReady: true,
				step: 'ready'
			});
		}
		case CAST_NAVIGATION: {
			return Object.assign({}, state, {
				step: action.step
			});
		}
		case CAST_USER_INFO: {
			return Object.assign({}, state, {
				user: action.user,
			});
		}
		case CAST_REQUEST: {
			return Object.assign({}, state, {
				step: action.step,
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
