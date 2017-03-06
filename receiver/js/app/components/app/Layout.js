import DOMView from 'abstract/view/DOM';
import { calculateResponsiveState } from 'redux-responsive';
import { scroll, raf } from 'actions/window';
import store from 'store';

class Layout extends DOMView {

	scrollTicket = false;

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
