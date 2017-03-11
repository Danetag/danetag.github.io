import React from 'react';

export const ANSWERS = {
	WELCOME: 'Hey I am Mood Mixer. What mood are you in?',
	WELCOME_FIRST_TIME: 'Hey I am Mood Mixer. I will help you make a playlist based the mood you want. Let me know if there any genres and artists you want to be based on. And how long or short you want to playlist to be. Once we make a playlist you like I am able to save it to your account, ${USERNAME}. Do you want to try it out by giving me some moods to build the playlist on?',
	REQUEST: (moods, genres, artists) => <p key="REQUEST">You requested {moods} {genres} {artists}. Let's see what I have...</p>,
	INFO_REQUEST: (moods, genres, artists) => <p key="REQUEST">Your playlist is {moods} {genres} {artists}.</p>,
	REQUEST_MOOD_START: (moods) => <span key="REQUEST_MOOD_START">a {moods} playlist</span>,
	REQUEST_GENRE_START: (genres) => <span key="REQUEST_GENRE_START">a {genres} playlist</span>,
	REQUEST_GENRE_CONTINUE: (genres) => <span key="REQUEST_GENRE_CONTINUE">with some {genres}</span>,
	REQUEST_ARTIST_START: (artists) => <span key="REQUEST_ARTIST_START">a playlist based on {artists}</span>,
	REQUEST_ARTIST_CONTINUE: (artists) => <span key="REQUEST_ARTIST_CONTINUE">based on {artists}</span>,
	RESULT: (moods, genres, artists) => <p key="RESULT">Okay, I have some ideas {moods} {genres} {artists}. Do you want to preview some songs or save the playlist?</p>,
	RESULT_FAILED: 'I don\'t have enough information for your perfect playlist! What kind of music do you like?',
	PLAY_FIRST_SONG: 'Here\'s the first song ${AUDIO}',
	PLAY_SECOND_SONG: 'Here\'s the second song ${AUDIO}',
	PLAY_N_SONG: 'Here\'s the next song ${AUDIO}',
	PLAY_N_SONG_2: 'How is this sounding? ${AUDIO}',
	WHAT_DO_YOU_THINK: 'What do you think?',
	ENGAGE_NEXT_SONG_OR_SAVE: 'Do you want to listen to the next song or save the playlist?',

	APPROVE_SONG: 'Ok, cool! ',
	APPROVE_SONG_PLUS: 'Ok, cool! it will ',
	MORE_MOOD: 'Ok, it\'s ${MOODS} . ',
	LESS_MOOD: 'Ok, it\'s less ${MOODS} . ',
	MORE_ARTIST: 'Ok, ${ARTISTS} is included. ',
	LESS_ARTIST: 'Ok, I removed ${ARTISTS} from the mix. ',
	MORE_GENRE: 'Ok, let\'s throw in some ${GENRES} ! ',
	LESS_GENRE: 'Ok, let\'s remove ${GENRES} . ',

	ERROR: 'An issue occured. Is it... ?',
	NO_PREVIEW: 'I don\'t have any preview for ${NAME} by ${ARTIST}. Do you want to listen to the next song or save the playlist?',

	DISAPPROVE_SONG: 'Okay, I’ll try something different. ',
	ADD_MOOD: 'Ok, it\'s more ${MOOD} now! ',
	REMOVE_MOOD: 'Ok, it\'s less ${MOOD}. ',
	ADD_GENRE: 'Ok, I added some ${GENRE}! ',
	REMOVE_GENRE: 'Ok, I removed some ${GENRE}. ',
	ADD_ARTIST: 'Ok, your playlist will sound more like ${ARTIST}! ',
	REMOVE_ARTIST: 'Ok, you don\'t want ${ARTIST}. ',

	NAME_PLAYLIST: 'What do you want to name the playlist?',
	PLAYLIST_SAVED_AND_EXIT: 'Got it, your playlist ${NAME}, is saved. Talk to you soon! ${AUDIO}',

	NO_MORE_SONGS: 'There\'s no more songs to preview! Do you want to save the current playlist?',
};
