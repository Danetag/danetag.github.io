import {
	HOMEPAGE,
	NEWS_PAGE,
  NEWS_DETAILS_PAGE
} from 'constants/locations';

export function navigateToHomepage() {
	return {
		type: HOMEPAGE
	};
}

export function navigateToNewsPage() {
	return {
		type: NEWS_PAGE
	};
}

export function navigateToNewsDetailPage() {
	return {
		type: NEWS_DETAILS_PAGE
	};
}
