import React, { Component, PropTypes } from 'react';
import Request from './request';
import InfoPlaylist from './infoPlaylist';
import ListTracks from './listTracks';

class Playlist extends Component {

	static propTypes = {
		request: PropTypes.object,
		user: PropTypes.object,
		params: PropTypes.object,
		currentIdxSong: PropTypes.number,
		currentPlaylist: PropTypes.object,
	}

	RequestComponent() {
		const { request } = this.props;

		// no request!
		if (!request.artist.length && !request.genre.length && !request.mood.length) return null;
		return <Request artist={request.artist} genre={request.genre} mood={request.mood} />;
	}

	InfoPlaylistComponent() {
		const { params, currentIdxSong, currentPlaylist, user } = this.props;
		if (!currentPlaylist.tracks[currentIdxSong]) return null;
		return <InfoPlaylist user={user} params={params} currentTrack={currentPlaylist.tracks[currentIdxSong]} />;
	}

	ListTracksComponent() {
		const { params, currentIdxSong, currentPlaylist } = this.props;
		if (!currentPlaylist.tracks.length) return null;
		return <ListTracks currentIdxSong={currentIdxSong} tracks={currentPlaylist.tracks} />;
	}

	render() {
		return (
			<div id="playlist-component" className="component-wrapper" key="playlist-component">
				{this.RequestComponent()}
				<div className="left-side">
					{ this.InfoPlaylistComponent() }
				</div>
				<div className="right-side">
					{ this.ListTracksComponent() }
				</div>
			</div>
		);
	}
}

export default Playlist;
