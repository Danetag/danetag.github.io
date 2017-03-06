import AbstractPageView from 'abstract/view/DOM/page';

class Homepage extends AbstractPageView {

	constructor() {
		super();

		this.events = {
			'click': ::this.onClick
		};

		console.log('Homepage', this);
	}

	onClick() {
		console.log('onClick');
	}
}

export default Homepage;
