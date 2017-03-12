import React, { Component, PropTypes } from 'react';
import { getListStr } from 'utils/answers';
import {
	ANSWERS
} from 'constants/answers';

class InfoPlaylist extends Component {

	static propTypes = {
		params: PropTypes.object,
		user: PropTypes.object,
		currentTrack: PropTypes.object
	}

	FormatRequest() {
		const { params, user } = this.props;
		const mood = params.seed_moods;
		const artist = params.seed_artists.map((art, idx) => {
			return art.name;
		});
		const genre = params.seed_genres;
		let hasGivenSomething = false;

		// Mood
		const moodStr = [];
		if (mood.length > 0) {
			const moodStrList = getListStr(mood, 'mood');
			moodStr.push(ANSWERS.REQUEST_MOOD_START(moodStrList));
			hasGivenSomething = true;
		}

		// Genre
		const genreStr = [];
		if (genre.length > 0) {
			// add a comma on the previous string if has started already
			if (hasGivenSomething && moodStr) moodStr.push(<span key="seperator_mood">,</span>);

			const genreStrList = getListStr(genre, 'genre');
			hasGivenSomething ? genreStr.push(ANSWERS.REQUEST_GENRE_CONTINUE(genreStrList)) : genreStr.push(ANSWERS.REQUEST_GENRE_START(genreStrList));
			hasGivenSomething = true;
		}

		// Artist
		const artistStr = [];
		if (artist.length > 0) {
			// add a comma on the previous string if has started already
			if (hasGivenSomething && genreStr.length) genreStr.push(<span key="seperator_genre">,</span>);

			const artistStrList = getListStr(artist, 'artist');
			hasGivenSomething ? artistStr.push(ANSWERS.REQUEST_ARTIST_CONTINUE(artistStrList)) : artistStr.push(ANSWERS.REQUEST_ARTIST_START(artistStrList));
			hasGivenSomething = true;
		}

		return (<div key="FormatRequest" className="info">
			{user.name}, {ANSWERS.INFO_REQUEST(moodStr, genreStr, artistStr)}
		</div>);
	}

	render() {
		const { params, currentTrack } = this.props;

		return (
			<div id="info-playlist-component" className="component-wrapper" key="info-playlist-component">
				<img src={`${currentTrack.album.images[1].url}`} height={`${currentTrack.album.images[1].height}`} width={`${currentTrack.album.images[1].width}`} />
				{ this.FormatRequest() }
			</div>
		);
	}
}

export default InfoPlaylist;
