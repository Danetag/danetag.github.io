import { localStorageSupport } from './local-storage';

export function isConsumed(contentId) {
	if (!localStorageSupport) return false;
	const consumedContent = localStorage.getItem('consumedContent');
	if (!consumedContent) return false;
	const isConsumd = !!JSON.parse(consumedContent)[contentId];
	return isConsumd;
}

export function consume(contentId) {
	let consumedContent = localStorage.getItem('consumedContent');
	consumedContent = consumedContent ? JSON.parse(consumedContent) : {};
	consumedContent = Object.assign(consumedContent, { [contentId]: true });
	localStorage.setItem('consumedContent', JSON.stringify(consumedContent));
}
