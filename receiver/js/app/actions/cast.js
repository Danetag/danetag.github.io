import {
	CAST_READY,
	CAST_MESSAGE,
	CAST_USER_INFO,
	CAST_WELCOME,
	CAST_PLAYLIST,
	CAST_NAVIGATION,
	CAST_ERROR,
	CAST_PREVIEW
} from 'constants/action-types';

export function ready() {
	return {
		type: CAST_READY
	};
}

export function navigation(data) {
	return {
		type: CAST_NAVIGATION,
		step: data.step
	};
}

export function userInfo(data) {
	return {
		type: CAST_USER_INFO,
		user: data.user
	};
}

export function playlist(data) {
	return {
		type: CAST_PLAYLIST,
		data: data
	};
}

export function preview(data) {
	return {
		type: CAST_PREVIEW,
		data: data
	};
}

export function error(data) {
	return {
		type: CAST_ERROR,
		data: data.error
	};
}

export function message(data) {
	return {
		type: CAST_MESSAGE,
		data: data
	};
}
