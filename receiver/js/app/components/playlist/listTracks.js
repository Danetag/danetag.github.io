import React, { Component, PropTypes } from 'react';

class ListTracks extends Component {

	static propTypes = {
		currentIdxSong: PropTypes.number,
		tracks: PropTypes.array
	}

	List() {
		const { currentIdxSong, tracks } = this.props;
		return tracks.map((track, idx) => {
			return (<li key={`track_${idx}`} ref={`track_${idx}`} className={`track ${currentIdxSong === idx ? 'current' : ''}`}>
				<span className="idx">{idx}.</span>
				<div className="info">
					<span className="name">{track.name}</span>
					<span className="artist">{track.artists[0].name}</span>
				</div>
			</li>);
		});
	}

	render() {
		return (
			<div id="list-tracks-component" className="component-wrapper" key="list-tracks-component">
				<ul>
					{ this.List() }
				</ul>
			</div>
		);
	}
}

export default ListTracks;
