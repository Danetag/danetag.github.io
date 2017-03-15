import AbstractDOMView from 'abstract/view/DOM';
import $ from 'webpack-zepto';
import { showNav, hideNav } from 'actions/ui';
// import store from 'store';


class MenuView extends AbstractDOMView {

    topBanner = null;
    topBannerHeight = null;
    hamburger = null;
    hamburgerActive = null;
    body = null;

    constructor(options) {
        super(options);
         this.watchers = {
             'ui.navOpen': ::this.mobileNav,
             'browser.greaterThan.tablet': ::this.clearMobileNav
         };
    }
    initDOM() {
        this.topBanner = document.getElementById('msk-brand-bar');
        this.hamburger = this.el.querySelector('#hamburger_icon');
        this.hamburgerActive = this.el.querySelector('#hamburger_icon_active');
        this.body = document.getElementsByTagName('body')[0];
    }
    bindEvents() {
        this.hamburger.addEventListener('click', () => { this.dispatch(showNav); } );
        this.hamburgerActive.addEventListener('click', () => { this.dispatch(hideNav); } );
    }
    setupDOM() {
        this.topBannerHeight = this.topBanner.offsetHeight;
    }
    onResize() {
        this.topBannerHeight = this.topBanner.offsetHeight;
    }
    onScroll(newScrollState, oldScrollState, objectPath) {
        this.stickNav(newScrollState.y);
    }
    stickNav(scrollY) {
        if(scrollY > this.topBannerHeight) {
            this.el.classList.add('sticky');
        } else {
            this.el.classList.remove('sticky');
        }
    }
    mobileNav(newNavState, oldNavState, objectPath) {
        if(!oldNavState && newNavState) {
            this.body.classList.add('mobile_nav');
        } else if(oldNavState && !newNavState) {
            this.body.classList.remove('mobile_nav');
        }
    }
    clearMobileNav(new1, old1, objectPath) {
        this.dispatch(hideNav);
    }
}

export default MenuView;
