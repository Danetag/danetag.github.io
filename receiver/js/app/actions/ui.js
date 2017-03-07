import {
	UI_NAV_HIDE,
	UI_NAV_SHOW,
  UI_NAV_TOGGLE,
} from '../constants/action-types';

export function hideNav() {
	return {
		type: UI_NAV_HIDE
	};
}

export function showNav() {
	return {
		type: UI_NAV_SHOW
	};
}

export function toggleNav(status) {
	return {
		type: UI_NAV_TOGGLE,
		status,
	};
}
