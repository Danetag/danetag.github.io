import {
	SCROLL,
	RAF,
} from 'constants/action-types';

const initialState = {
	scroll: {
		x: 0,
		y: 0
	},
	rafID: null
};

export default function window(state = initialState, action) {
	switch (action.type) {
		case SCROLL: {
			return Object.assign({}, state, {
        scroll: action.scroll
      });
		}
		case RAF: {
			return Object.assign({}, state, {
        rafID: action.rafID
      });
		}
		default: {
			return state;
		}
	}
}
