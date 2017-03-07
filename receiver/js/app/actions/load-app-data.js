import {
	LOAD_APP_DATA_START,
	LOAD_APP_DATA_SUCCESS,
	LOAD_APP_DATA_ERROR
} from '../constants/action-types';

const loadDataStart = () => {
	return {
		type: LOAD_APP_DATA_START
	};
};

const loadDataSuccess = (items) => {
	return {
		type: LOAD_APP_DATA_SUCCESS,
		payload: {
			data: items
		}
	};
};

const loadDataError = () => {
	return {
		type: LOAD_APP_DATA_ERROR
	};
};

export {
	loadDataStart,
	loadDataSuccess,
	loadDataError
};
