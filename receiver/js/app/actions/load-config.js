import {
	LOAD_CONFIG
} from '../constants/action-types';

import { JSON_DIR } from 'constants/config';
import fetch from 'utils/fetch';

const OPTIONS = {};

export function loadConfig(filename) {
	return {
		type: LOAD_CONFIG,
		payload: {
			promise: fetch(`${JSON_DIR}${filename}.json`, OPTIONS)
			.then(response => response.json()),
		},
	};
}
