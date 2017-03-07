import {
	SCRIPT,
} from 'constants/action-types';

export function script(script_) {
	return {
		type: SCRIPT,
		script: script_
	};
}
