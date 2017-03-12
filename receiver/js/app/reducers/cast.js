import {
	CAST_NAVIGATION,
	CAST_READY,
	CAST_REQUEST,
	CAST_USER_INFO,
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
	currentIdxSong: 0,
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
			console.log('action', action);
			return Object.assign({}, state, {
				step: 'playlist',
				params: action.params,
				currentPlaylist: action.currentPlaylist,
				request: {
					artist: [],
					genre: [],
					mood: []
				}
			});
		}
		default: {
			return state;
		}
	}
}
