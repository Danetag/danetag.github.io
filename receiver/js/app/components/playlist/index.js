import React, { Component, PropTypes } from 'react';
import Request from './request';

class Playlist extends Component {

	static propTypes = {
		request: PropTypes.object,
		params: PropTypes.object,
		currentIdxSong: PropTypes.number,
		currentPlaylist: PropTypes.object,
	}

	RequestComponent() {
		const { request } = this.props;

		console.log('request', request);

		// no request!
		if (!request.artist.length && !request.genre.length && !request.mood.length) return null;
		return <Request artist={request.artist} genre={request.genre} mood={request.mood} />;
	}

	render() {
		return (
			<div id="playlist-component" className="component-wrapper" key="playlist-component">
				<h1>Playlist</h1>
				{this.RequestComponent()}
			</div>
		);
	}
}

export default Playlist;
