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
		navigation: PropTypes.object,
		playlist: PropTypes.object,
		// action props
		isLoading: PropTypes.bool.isRequired,
		isReady: PropTypes.bool.isRequired,
	};

	render() {
		const { config, isLoading, isReady, appData, itemsToLoad, navigation, playlist } = this.props;

		// console.log('isReady', isReady, navigation);
		// components depending of the props
		const loader = isLoading || !isReady ? <Loader config={config} items={itemsToLoad} key="loader" /> : null;
		const ui = !isLoading && isReady ? <UI key="ui-component" /> : null;
		let content = null;

		if (config.hasLoaded && isReady) {
			switch (navigation.step) {
				case 'welcome': content = <Welcome />; break;
				case 'playlist': content = <Playlist playlist={playlist} />; break;
				default: content = null;
			}
		}

		return (
			<div id="app">
				<Cast />
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
    isReady: state.config.hasLoaded && state.appData.hasLoaded && state.navigation.isReady,
    appData: state.appData,
    config: state.config,
    navigation: state.navigation,
    playlist: state.playlist,
		isLoading: !state.config.hasLoaded || ((state.config[state.navigation.step].assets && state.config[state.navigation.step].assets.length > 0 && !state.appData.hasLoaded) || false),
		itemsToLoad: state.config.hasLoaded && state.config[state.navigation.step].assets ? state.config[state.navigation.step].assets : [],
  };
};

export default connect(
  mapStateToProps,
  null
)(App);
