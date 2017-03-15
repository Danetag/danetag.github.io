import AbstractPageView from 'abstract/view/DOM/page';
import HomepageTpl from 'tpl/homepage.handlebars';

class Homepage extends AbstractPageView {
	constructor(options) {
		options = options ? options : {};
		options.template = HomepageTpl;
		super(options);
	}

	// onClick() {
	// 	console.log('onClick');
	// }

	// Where you cache the DOM references in this.$els
	initDOM() {
		// this.$els.h1 = this.$el.find('h1');
	}

	// Where you setup DOM elements for animations/position...
	setupDOM() {

	}

	onResize() {
		console.log('Homepage: onResize');
	}

	onScroll() {
		console.log('Homepage: onScroll');
	}

	showView() {
		this.onShown();
	}

	hideView() {
		this.onHidden();
	}
}

export default Homepage;
