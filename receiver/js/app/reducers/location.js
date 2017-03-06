import {
	HOMEPAGE,
	NEWS_PAGE,
  NEWS_DETAIL_PAGE
} from 'constants/locations';

import HomepageView from 'components/pages/homepage';

const initialState = {
	view: null
};

export default function config(state = initialState, action) {
	switch (action.type) {
		case HOMEPAGE: {
			return Object.assign({}, state, {
        view: HomepageView
      });
		}
		case NEWS_PAGE: {
			return Object.assign({}, state, {
        view: HomepageView
      });
		}
    case NEWS_DETAIL_PAGE: {
			return Object.assign({}, state, {
        view: HomepageView
      });
		}
		default: {
			return state;
		}
	}
}
