export default function getParentURL(pathname) {
	const URLSegments = pathname.substring(1).split('/');
	let parentURL = '';

	for (let i = 0; i < URLSegments.length - 1; i++) {
		parentURL = parentURL + '/' + URLSegments[i];
	}

	return parentURL;
}
