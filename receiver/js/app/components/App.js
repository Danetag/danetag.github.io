import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import TransitionGroup from 'react-addons-transition-group';

import UI from 'containers/ui/ui';
import Cast from 'containers/cast';

import Loader from 'containers/loader/loader';
import Welcome from 'components/welcome';
import Playlist from 'components/playlist';

class App extends Component {

	static propTypes = {
		itemsToLoad: PropTypes.array.isRequired,
		// store state props
		config: PropTypes.object.isRequired,
		appData: PropTypes.object.isRequired,
		cast: PropTypes.object,
		script: PropTypes.object,
		// action props
		isLoading: PropTypes.bool.isRequired,
		isReady: PropTypes.bool.isRequired,
	};

	render() {
		const { config, isLoading, isReady, appData, itemsToLoad, cast, script } = this.props;

		// console.log('isReady', isReady, navigation);
		// components depending of the props
		const loader = isLoading || !isReady ? <Loader config={config} items={itemsToLoad} key="loader" /> : null;
		const ui = !isLoading && isReady ? <UI key="ui-component" script={script} /> : null;
		let content = null;

		if (config.hasLoaded && isReady) {
			switch (cast.step) {
				case 'welcome': content = <Welcome user={cast.user} />; break;
				case 'playlist': content = <Playlist {...this.props} />; break;
				default: content = null;
			}
		}

		return (
			<div id="app">
				<Cast script={script} />
				{ui}
				<TransitionGroup component="div" id="content" transitionAppear>
					{loader}
					{content}
				</TransitionGroup>
			</div>
		);
	}
}

const mapStateToProps = (state, props) => {
	// if (state.config.hasLoaded) console.log('--- fecth config done', props.children.props.route.id, state.config);
	// if (state.appData.hasLoaded) console.log('--- fecth appData done');
	// console.log('state', state, 'navigation', state.navigation.isReady);
  return {
    isReady: state.config.hasLoaded && state.appData.hasLoaded && state.cast.isReady,
    appData: state.appData,
    config: state.config,
    script: state.script,
    cast: state.cast,
		isLoading: !state.config.hasLoaded || ((state.config[state.cast.step].assets && state.config[state.cast.step].assets.length > 0 && !state.appData.hasLoaded) || false),
		itemsToLoad: state.config.hasLoaded && state.config[state.cast.step].assets ? state.config[state.cast.step].assets : [],
  };
};

export default connect(
  mapStateToProps,
  null
)(App);
