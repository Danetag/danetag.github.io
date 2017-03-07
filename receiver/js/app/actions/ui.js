import {
	CAST_NAVIGATION
} from '../constants/action-types';

export function navigation(step) {
	return {
		type: CAST_NAVIGATION,
		data: {
			action: step
		}
	};
}
