import {
	message,
	error,
	playlist,
	preview,
	welcome
} from 'actions/cast';

class Cast {

	constructor() {
		window.cast.receiver.logger.setLevelValue(0);
		this.receiverManager = window.cast.receiver.CastReceiverManager.getInstance();
		this.messageBus = null;
		this.initResolve = null;
	}

	init() {
		return new Promise((resolve, reject) => {
			this.initResolve = resolve;

			// bind events
			this.receiverManager.onReady = ::this._onReady;
			this.receiverManager.onSenderConnected = ::this._onSenderConnected;
			this.receiverManager.onSenderDisconnected = ::this._onSenderDisconnected;
			this.receiverManager.onSystemVolumeChanged = ::this._onSystemVolumeChanged;

			// create a CastMessageBus to handle messages for a custom namespace
			this.messageBus = this.receiverManager.getCastMessageBus('urn:x-cast:com.danetag.moodmixer');
			this.messageBus.onMessage = ::this._onMessage;
		});
	}

	_onReady(event) {
		console.log('Received Ready event: ' + JSON.stringify(event.data));
		this.receiverManager.setApplicationState('Application status is ready...');
		this.initResolve();
	}

	_onSenderConnected(event) {
		console.log('Received Sender Connected event: ' + event.data);
		console.log(this.receiverManager.getSender(event.data).userAgent);
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

		switch(eventObj.action) {
			case 'welcome': welcome(eventObj.data); break;
			case 'error': error(eventObj.data); break;
			case 'playlist': playlist(eventObj.data); break;
			case 'preview': preview(eventObj.data); break;
			default: message(eventObj.data); break;
		}

		// display the message from the sender
		// displayText(data.text);
		// inform all senders on the CastMessageBus of the incoming message event
		// sender message listener will be invoked
		this.messageBus.send(event.senderId, event.data);
	}
}

export default Cast;
