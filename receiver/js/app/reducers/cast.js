import {
	CAST_NAVIGATION,
	CAST_READY,
	CAST_REQUEST,
	CAST_USER_INFO,
	CAST_STOP_PREVIEW,
	CAST_PREVIEW,
	CAST_SAVE_PLAYLIST,
	CAST_PLAYLIST
} from '../constants/action-types';

const initialState = {
	step: 'ready',
	isReady: false,
	currentStepIsShown: false,
	user: {},
	request: {
		artist: [],
		genre: [],
		mood: []
	},
	params: {
		seed_moods: [],
		remove_moods: [],
		seed_artists: [],
		remove_artists: [],
		seed_genres: [],
		remove_genres: [],
		seed_tracks: [],
		removed_tracks: [],
		approved_tracks: []
	},
	isPlaying: false,
	currentIdxSong: 0,
	namePlaylist: null,
	currentPlaylist: {
		tracks: []
	},
	error: {
		status: 0
	}
};

export default function cast(state = initialState, action) {
	switch (action.type) {
		case CAST_READY: {
			if (state.isReady) return state; // no need
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
				step: 'playlist',
				request: action.request
			});
		}
		case CAST_PLAYLIST: {
			return Object.assign({}, state, {
				step: 'playlist',
				params: action.params,
				currentPlaylist: action.currentPlaylist,
				currentIdxSong: action.currentIdxSong || state.currentIdxSong,
				request: {
					artist: [],
					genre: [],
					mood: []
				}
			});
		}
		case CAST_PREVIEW: {
			return Object.assign({}, state, {
				step: 'playlist',
				currentIdxSong: action.currentIdxSong,
				isPlaying: action.isPlaying
			});
		}
		case CAST_STOP_PREVIEW: {
			return Object.assign({}, state, {
				step: 'playlist',
				isPlaying: action.isPlaying
			});
		}
		case CAST_SAVE_PLAYLIST: {
			return Object.assign({}, state, {
				step: 'save',
				namePlaylist: action.namePlaylist
			});
		}
		default: {
			return state;
		}
	}
}
