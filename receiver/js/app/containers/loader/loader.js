import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { loadConfig } from 'actions/load-config';
import { loadDataStart, loadDataSuccess, loadDataError } from 'actions/load-app-data';

import transitionHooks from 'utils/transitionHooks';

// Containers
import MainLoaderContainer from './main-loader';
import PageLoaderContainer from './page-loader';

class Loader extends Component {

	static propTypes = {
		items: PropTypes.array.isRequired,
		config: PropTypes.object.isRequired,
		// canLoad: PropTypes.bool.isRequired,
		// action props
		fetchConfig: PropTypes.func.isRequired,
		onLoadStart: PropTypes.func.isRequired,
		onComplete: PropTypes.func.isRequired,
		onError: PropTypes.func.isRequired,
		// transitions
		componentWillAppear: PropTypes.func,
		componentWillEnter: PropTypes.func,
		componentDidAppear: PropTypes.func,
		componentDidEnter: PropTypes.func,
		componentWillLeave: PropTypes.func,
		componentDidLeave: PropTypes.func,
	};

	constructor(props) {
		super(props);
    this.props.componentDidAppear(::this.componentDidEnter);
    this.props.componentDidEnter(::this.componentDidEnter);
    this.props.componentDidLeave(::this.componentDidLeave);
	}

	componentWillMount() {
		const { config } = this.props;
		this.setState({ isFirstTime: !config.hasLoaded, isShown: false });
	}

	componentDidEnter() {
		// console.log('Loader componentDidEnter');
		this.setState({ isShown: true });
		const { fetchConfig, config } = this.props;
		if (!config.hasLoaded) fetchConfig('config');
	}

	componentDidLeave() {
		//
	}

	render() {
		const { config } = this.props;
		const load = this.state.isShown && config.hasLoaded;
		const loader = this.state.isFirstTime ?
		<MainLoaderContainer
			{...this.props}
			load={load}
		/> :
		<PageLoaderContainer
			{...this.props}
			load={load}
		/>;

		return  <div id="loader">{ loader }</div>;
	}
}

const mapStateToProps = (state, props) => {
	// console.log('state', state, 'props', props);
  return {
		// canLoad: state.config.hasLoaded
	};
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchConfig: (filename) => {
			// console.log('-*--- fetchConfig');
      dispatch(loadConfig(filename));
    },
		onLoadStart(e) {
			// console.log('-*--- fetch pageData');
			dispatch(loadDataStart());
		},
		onComplete(e) {
			dispatch(loadDataSuccess(e.items));
		},
		onError(e) {
			dispatch(loadDataError());
		}
  };
};

export default transitionHooks(connect(
  mapStateToProps,
  mapDispatchToProps
)(Loader));
