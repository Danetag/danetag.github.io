import DOMView from 'abstract/view/DOM';
import { calculateResponsiveState } from 'redux-responsive';
import { scroll, raf } from 'actions/window';
import store from 'store';

import Menu from 'components/app/menu';

class Layout extends DOMView {

	constructor(options) {
		super(options);
		this.Menu = null;
	}

	scrollTicket = false;

	initDOM() {
		const initScrollObj = {
			x: window.scrollX || window.pageXOffset,
			y: window.scrollY || window.pageYOffset
		};
		store.dispatch(scroll(initScrollObj));
		// this.Menu = new Menu({ el: document.getElementById('masthead') });
		// this.Menu.init();
	}

	bindEvents() {
		window.addEventListener('resize', () => store.dispatch(calculateResponsiveState(window)), false);
		window.addEventListener('scroll', () => { this.scrollTicket = true; }, false);
	}

	onUpdate() {
		if (this.scrollTicket) {
			this.scrollTicket = false;
			const scrollObj = {
				x: window.scrollX || window.pageXOffset,
				y: window.scrollY || window.pageYOffset
			};
			store.dispatch(scroll(scrollObj));
		}
	}
}

export default Layout;
