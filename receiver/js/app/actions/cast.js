import {
	CAST_READY,
	CAST_MESSAGE,
	CAST_REQUEST,
	CAST_USER_INFO,
	CAST_WELCOME,
	CAST_PLAYLIST,
	CAST_NAVIGATION,
	CAST_ERROR,
	CAST_STOP_PREVIEW,
	CAST_SAVE_PLAYLIST,
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

export function request(data) {
	return {
		type: CAST_REQUEST,
		step: 'playlist',
		request: {
			artist: data.artist || [],
			genre: data.genre || [],
			mood: data.mood || []
		}
	};
}

export function playlist(data) {
	return {
		type: CAST_PLAYLIST,
		step: 'playlist',
		params: data.params,
		currentIdxSong: data.currentIdxSong || 0,
		currentPlaylist: data.currentPlaylist
	};
}

export function preview(data) {
	return {
		type: CAST_PREVIEW,
		step: 'playlist',
		currentIdxSong: data.currentIdxSong,
		isPlaying: data.isPlaying || true
	};
}

export function stopPreview(data) {
	return {
		type: CAST_STOP_PREVIEW,
		step: 'playlist',
		isPlaying: false
	};
}

export function savePlaylist(data) {
	return {
		type: CAST_SAVE_PLAYLIST,
		step: 'save',
		namePlaylist: data.name
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
