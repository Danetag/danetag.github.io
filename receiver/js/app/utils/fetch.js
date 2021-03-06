/* FOR BROWSER WITHOUT PROMISE SUPPORT */
require('es6-promise').polyfill();
import isomorphicFetch from 'isomorphic-fetch';

function checkStatus(response) {
	if (response.status >= 200 && response.status < 300) {
		return response;
	}
	const error = new Error(response.statusText);
	error.response = response;
	throw error;
}

export default function fetch(url, options = {}) {
	return isomorphicFetch(url, options)
		.then(checkStatus);
}
