import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react';

import {
	ready,
	navigation,
	userInfo,
	message,
	error,
	playlist,
	preview,
	request
} from 'actions/cast';

import {
	CAST_READY,
	CAST_USER_INFO,
	CAST_MESSAGE,
	CAST_REQUEST,
	CAST_PLAYLIST,
	CAST_NAVIGATION,
	CAST_ERROR,
	CAST_PREVIEW
} from 'constants/action-types';

class Cast extends Component {

	static propTypes = {
		script: PropTypes.object,
		readyAction: PropTypes.func.isRequired,
		navigationAction: PropTypes.func.isRequired,
		userInfoAction: PropTypes.func.isRequired,
		requestAction: PropTypes.func.isRequired,
		messageAction: PropTypes.func.isRequired,
		errorAction: PropTypes.func.isRequired,
		playlistAction: PropTypes.func.isRequired,
		previewAction: PropTypes.func.isRequired,
	};

	constructor(props) {
		super(props);
		this.isDev = (process.env.NODE_ENV === 'development');
		if (this.isDev) window.cast.receiver.logger.setLevelValue(0);
		if (this.isDev) this.receiverManager = window.cast.receiver.CastReceiverManager.getInstance();
		this.messageBus = null;
	}

	componentDidMount() {
		this._init();
	}

	componentDidUpdate(prevProps, prevStates) {
		// console.log('this.props.script', this.props.script);
		if (this.props.script !== prevProps.script && this.isDev) this._onMessage({data: JSON.stringify(this.props.script.currentScript)});
	}

	_init() {
		this._bindEvents();
		this._createMessageBus();
		this._start();
		if (this.isDev) this._onSenderConnected();
	}

	_bindEvents() {
		if (this.isDev) return;
		// bind events
		this.receiverManager.onReady = ::this._onReady;
		this.receiverManager.onSenderConnected = ::this._onSenderConnected;
		this.receiverManager.onSenderDisconnected = ::this._onSenderDisconnected;
		this.receiverManager.onSystemVolumeChanged = ::this._onSystemVolumeChanged;
	}

	_createMessageBus() {
		if (this.isDev) return;
		// create a CastMessageBus to handle messages for a custom namespace
		this.messageBus = this.receiverManager.getCastMessageBus('urn:x-cast:com.danetag.moodmixer');
		this.messageBus.onMessage = ::this._onMessage;
	}

	_start() {
		if (this.isDev) return;
		const appConfig = new window.cast.receiver.CastReceiverManager.Config();
		appConfig.maxInactivity = 6000;
		appConfig.statusText = 'Ready to play';
		this.receiverManager.start(appConfig);
	}

	_onReady(event) {
		this.receiverManager.setApplicationState('Application status is ready...');
	}

	_onSenderConnected(event) {
		const { readyAction } = this.props;
		if (event) {
			console.log('Received Sender Connected event: ' + event.data);
			console.log(this.receiverManager.getSender(event.data).userAgent);
		}
		readyAction();
	}

	_onSenderDisconnected(event) {
		console.log('Received Sender Disconnected event: ' + event.data);
		if (this.receiverManager.getSenders().length === 0) {
			window.close();
		}
	}

	_onSystemVolumeChanged(event) {
		console.log('Received System Volume Changed event: ' + event.data.level + ' ' + event.data.muted);
	}

	_onMessage(event) {
		const eventObj = JSON.parse(event.data);
		const { readyAction, navigationAction, requestAction, errorAction, playlistAction, previewAction, messageAction, userInfoAction } = this.props;

		switch(eventObj.action) {
			case CAST_NAVIGATION: navigationAction(eventObj.data); break;
			case CAST_USER_INFO: userInfoAction(eventObj.data); break;
			case CAST_REQUEST: requestAction(eventObj.data); break;
			case CAST_PLAYLIST: playlistAction(eventObj.data); break;
			case CAST_ERROR: errorAction(eventObj.data); break;
			case CAST_PREVIEW: previewAction(eventObj.data); break;
			default: messageAction(eventObj.data); break;
		}

		// display the message from the sender
		// displayText(data.text);
		// inform all senders on the CastMessageBus of the incoming message event
		// sender message listener will be invoked
		if (process.env.NODE_ENV !== 'development') this.messageBus.send(event.senderId, event.data);
	}

	render() {
		return null;
	}
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
		readyAction: () => {
      dispatch(ready());
    },
		userInfoAction: (data) => {
      dispatch(userInfo(data));
    },
		messageAction: (data) => {
      dispatch(message(data));
    },
		errorAction: (data) => {
      dispatch(error(data));
    },
		playlistAction: (data) => {
      dispatch(playlist(data));
    },
		previewAction: (data) => {
      dispatch(preview(data));
    },
		requestAction: (data) => {
      dispatch(request(data));
    },
		navigationAction: (data) => {
      dispatch(navigation(data));
    },
	};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cast);
