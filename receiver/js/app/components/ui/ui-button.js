import React, { Component, PropTypes } from 'react';
// import oBtn from 'base/objects/o-btn.css';
// import styles from './ui-button.css';
import { Link } from 'react-router';
import InlineSVG from 'svg-inline-react';


class UiButton extends Component {
	static propTypes = {
		active: PropTypes.bool.isRequired,
		visible: PropTypes.bool,
		text: PropTypes.string,
		title: PropTypes.string.isRequired,
		icon: PropTypes.string,
		onClick: PropTypes.func,
		classModifier: PropTypes.string,
		aHref: PropTypes.string,
		hrefTarget: PropTypes.string,
	}

	_onClick = (event) => {
		if (event.currentTarget) event.currentTarget.blur();
		if (this.props.onClick) this.props.onClick(event);
	}

	_getAbsolute = (url) => {
		const re = /^https?:\/\/|^\/\//i;
		return re.test(url);
	}

	_getDomain = (url) => url.replace('http://', '').replace('https://', '').split('/')[0]

	_isInternalLink = (href) => {
		if (this._getAbsolute(href)) {
			return this._getDomain(window.location.href) === this._getDomain(href);
		}
		return true;
	}

	render() {
		const { active, text, icon, classModifier, aHref, title, hrefTarget } = this.props;

		// let className = active ? styles['is-active'] : styles.root;
		// if (classModifier) className = `${className} ${styles[`${classModifier}`]}`;

		let iconEl = null;
		if (icon) {
			iconEl = (
				<InlineSVG
					className
					src={require(`../../../assets/svgs/icons/${icon}.svg`)}
				/>
			);
		}
		let textEl = null;
		if (text) {
			textEl = (
				<span>
					{text}
				</span>
			);
		}
		if (aHref) {
			if (this._isInternalLink(aHref)) {
				return (
					<Link
						className
						to={aHref}
						onClick={this._onClick}
						title={title}
					>
						{iconEl}{textEl}
					</Link>
				);
			}

			return (
				<a
					className
					href={aHref}
					onClick={this._onClick}
					title={title}
					target={hrefTarget || '_blank'}
				>
					{iconEl}{textEl}
				</a>
			);
		}
		return (
			<button
				className
				onClick={this._onClick}
				type="button"
				name={title}
				value={title}
			>
				{iconEl}{textEl}
			</button>
		);
	}
}


export default UiButton;
