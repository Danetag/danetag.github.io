import {
	ADD_GENRES,
	ADD_SONGS,
	ADD_MOODS,
	ADD_ARTISTS,
	REMOVE_GENRES,
	REMOVE_SONGS,
	REMOVE_MOODS,
	REMOVE_ARTISTS
} from '../constants/action-types';

const initialState = {
	playlist: {}
};

export default function playlist(state = initialState, action) {
	switch (action.type) {
		case ADD_GENRES: {
			return Object.assign({}, state);
		}
		case ADD_SONGS: {
			return Object.assign({}, state);
		}
		case ADD_MOODS: {
			return Object.assign({}, state);
		}
		case ADD_ARTISTS: {
			return Object.assign({}, state);
		}
		case REMOVE_GENRES: {
			return Object.assign({}, state);
		}
		case REMOVE_SONGS: {
			return Object.assign({}, state);
		}
		case REMOVE_MOODS: {
			return Object.assign({}, state);
		}
		case REMOVE_ARTISTS: {
			return Object.assign({}, state);
		}
		default: {
			return state;
		}
	}
}
