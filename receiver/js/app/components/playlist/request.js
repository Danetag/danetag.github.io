import React, { Component, PropTypes } from 'react';
import { getListStr } from 'utils/answers';
import {
	ANSWERS
} from 'constants/answers';

class Request extends Component {

	static propTypes = {
		artist: PropTypes.array,
		genre: PropTypes.array,
		mood: PropTypes.array
	}

	FormatRequest() {
		const { artist, genre, mood } = this.props;
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

		return <div key="FormatRequest">{ANSWERS.REQUEST(moodStr, genreStr, artistStr)}</div>;
	}

	render() {
		return (
			<div id="request-component" className="component-wrapper" key="request-component">
				{ this.FormatRequest() }
			</div>
		);
	}
}

export default Request;
