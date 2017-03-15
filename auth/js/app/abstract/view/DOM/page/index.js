import AbstractDOMView from 'abstract/view/DOM';
import $ from 'webpack-zepto';

/**
 * PageView: Defines a page
 * @extends View
 * @constructor
 */
class PageView extends AbstractDOMView {

	renderTemplate() {
		super.renderTemplate();
		// append to main container
		$('#content').append(this.$el);
	}

}

export default PageView;
