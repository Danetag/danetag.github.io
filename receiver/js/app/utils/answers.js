import React from 'react';

export function getListStr(arr, type) {
	const list = arr.map((str, idx) => {
		const span = <span key={`${type}_${idx}`} ref={`${type}_${idx}`} className={`${type}`}>{arr[idx]}</span>;
		if (arr.length > 1 && idx < arr.length - 1) {
			return (idx === arr.length - 2) ? [span, <span key={`${type}_${idx}_and`}> and </span>] : [span, <span key={`${type}_${idx}_comma`}>, </span>];
		}
		return span;
	});
	return list;
}
