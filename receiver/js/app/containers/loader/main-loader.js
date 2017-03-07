import React, { Component, PropTypes } from 'react';
import AbstractLoaderContainer from '../../abstract/containers/loader';
import { connect } from 'react-redux';

// Containers
import MainLoader from '../../components/loader/main-loader';

class MainLoaderContainer extends AbstractLoaderContainer {

	render() {
		return (<MainLoader {...this.props} />);
	}

}

export default MainLoaderContainer;
