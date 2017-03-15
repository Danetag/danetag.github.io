import {
	UI_NAV_SHOW,
	UI_NAV_HIDE,
  UI_NAV_TOGGLE
} from '../constants/action-types';

const initialState = {
	navOpen: false
};

export default function ui(state = initialState, action) {
	switch (action.type) {
		case UI_NAV_SHOW: {
			return Object.assign({}, state, {
        navOpen: true
      });
		}
		case UI_NAV_HIDE: {
			return Object.assign({}, state, {
        navOpen: false
      });
		}
    case UI_NAV_TOGGLE: {
      let { navOpen } = state;
      navOpen = !navOpen;
			return Object.assign({}, state, {
        navOpen: navOpen
      });
		}
		default: {
			return state;
		}
	}
}
