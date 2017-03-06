import AbstractDOMView from 'abstract/view/DOM';


/**
 * PageView: Defines a page
 * @extends View
 * @constructor
 */
class PageView extends AbstractDOMView {

  constructor(options = {}) {
    options.selector = '#content';
    super(options);
  }

}

export default PageView;
