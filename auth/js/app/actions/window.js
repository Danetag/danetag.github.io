import {
	SCROLL,
	RAF,
} from 'constants/action-types';

export function scroll(scrollObj) {
	return {
		type: SCROLL,
		scroll: scrollObj
	};
}
export function raf(id) {
	return {
		type: RAF,
		rafID: id
	};
}
