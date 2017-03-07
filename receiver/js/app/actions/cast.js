import {
	CAST_READY,
	CAST_MESSAGE,
	CAST_WELCOME,
	CAST_PLAYLIST,
	CAST_ERROR,
	CAST_PREVIEW
} from 'constants/action-types';

export function ready() {
	return {
		type: CAST_READY
	};
}

export function welcome(data) {
	return {
		type: CAST_WELCOME,
		data: data
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
		data: data
	};
}

export function message(data) {
	return {
		type: CAST_MESSAGE,
		data: data
	};
}
