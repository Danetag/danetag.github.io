import {
	MESSAGE,
	WELCOME,
	PLAYLIST,
	ERROR,
	PREVIEW
} from 'constants/action-types';

export function welcome(data) {
	return {
		type: WELCOME,
		data: data
	};
}

export function playlist(data) {
	return {
		type: PLAYLIST,
		data: data
	};
}

export function preview(data) {
	return {
		type: PREVIEW,
		data: data
	};
}

export function error(data) {
	return {
		type: ERROR,
		data: data
	};
}

export function message(data) {
	return {
		type: MESSAGE,
		data: data
	};
}
