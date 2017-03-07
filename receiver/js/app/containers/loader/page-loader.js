import React, { Component, PropTypes } from 'react';
import AbstractLoaderContainer from '../../abstract/containers/loader';

// Containers
import PageLoader from '../../components/loader/page-loader';

class PageLoaderContainer extends AbstractLoaderContainer {
	render() {
		return <PageLoader {...this.props} />;
	}
}

export default PageLoaderContainer;
