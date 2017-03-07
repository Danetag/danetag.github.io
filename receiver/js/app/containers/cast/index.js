import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react';

import {
	ready,
	message,
	error,
	playlist,
	preview,
	welcome
} from 'actions/cast';

class Cast extends Component {

	static propTypes = {
		readyAction: PropTypes.func.isRequired,
		messageAction: PropTypes.func.isRequired,
		errorAction: PropTypes.func.isRequired,
		playlistAction: PropTypes.func.isRequired,
		previewAction: PropTypes.func.isRequired,
		welcomeAction: PropTypes.func.isRequired,
	};

	constructor(props) {
		super(props);
		window.cast.receiver.logger.setLevelValue(0);
		this.receiverManager = window.cast.receiver.CastReceiverManager.getInstance();
		this.messageBus = null;
	}

	componentDidMount() {
		this._init();
	}

	_init() {
		// bind events
		this.receiverManager.onReady = ::this._onReady;
		this.receiverManager.onSenderConnected = ::this._onSenderConnected;
		this.receiverManager.onSenderDisconnected = ::this._onSenderDisconnected;
		this.receiverManager.onSystemVolumeChanged = ::this._onSystemVolumeChanged;

		// create a CastMessageBus to handle messages for a custom namespace
		this.messageBus = this.receiverManager.getCastMessageBus('urn:x-cast:com.danetag.moodmixer');
		this.messageBus.onMessage = ::this._onMessage;

		const appConfig = new window.cast.receiver.CastReceiverManager.Config();
		appConfig.maxInactivity = 6000;
		appConfig.statusText = 'Ready to play';
		this.receiverManager.start(appConfig);

		if (process.env.NODE_ENV === 'development') this._onSenderConnected();
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
		const { readyAction, welcomeAction, errorAction, playlistAction, previewAction, messageAction } = this.props;

		switch(eventObj.action) {
			case 'welcome': welcomeAction(eventObj.data); break;
			case 'error': errorAction(eventObj.data); break;
			case 'playlist': playlistAction(eventObj.data); break;
			case 'preview': previewAction(eventObj.data); break;
			default: messageAction(eventObj.data); break;
		}

		// display the message from the sender
		// displayText(data.text);
		// inform all senders on the CastMessageBus of the incoming message event
		// sender message listener will be invoked
		this.messageBus.send(event.senderId, event.data);
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
		welcomeAction: (data) => {
      dispatch(welcome(data));
    },
	};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cast);
