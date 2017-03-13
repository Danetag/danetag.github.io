import React, { Component, PropTypes } from 'react';

class ListTracks extends Component {

	static propTypes = {
		currentIdxSong: PropTypes.number,
		isPlaying: PropTypes.bool,
		tracks: PropTypes.array,
		approvedTracks: PropTypes.array,
	}

	ApprovedTracks() {
		const { approvedTracks } = this.props;
		if (!approvedTracks.length) return null;

		const list = approvedTracks.map((track, idx) => {
			return (<li key={`approved_track_${idx}`} ref={`approved_track_${idx}`} className='approved-track'>
				<div className="info">
					<span className="name">{track.name}</span>
					<span className="artist">{track.artists[0].name}</span>
				</div>
			</li>);
		});

		return (<ul className="approved-tracks">
			<h2>Approved Tracks</h2>
			{list}
		</ul>);
	}

	CurrentPlaylist() {
		const { currentIdxSong, tracks, isPlaying } = this.props;
		const list = tracks.map((track, idx) => {
			const prefix = isPlaying && currentIdxSong === idx ? <span className="idx">( |> )</span> : <span className="idx">{idx + 1}.</span>;
			return (<li key={`track_${idx}`} ref={`track_${idx}`} className={`track ${currentIdxSong === idx ? 'current' : ''}`}>
				{prefix}
				<div className="info">
					<span className="name">{track.name}</span>
					<span className="artist">{track.artists[0].name}</span>
				</div>
			</li>);
		});

		return (<ul className="current-playlist">
			<h2>Current Tracks</h2>
			{list}
		</ul>);
	}

	render() {
		return (
			<div id="list-tracks-component" className="component-wrapper" key="list-tracks-component">
			{ this.ApprovedTracks() }
			{ this.CurrentPlaylist() }
			</div>
		);
	}
}

export default ListTracks;
