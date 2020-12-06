import React from 'react';
import {StatusBar} from 'react-native';
import OneSignal from 'react-native-onesignal';
import {appColors} from '../../Theme/appColors';
import {oneSignalSetup} from './setup';

export class NotificationService extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('working hoo yee');
    this.onReceived = this.onReceived.bind(this);
    this.onOpened = this.onOpened.bind(this);
    this.onIds = this.onIds.bind(this);
    console.log('working');
    this.oneSignalNotification();
  }

  async oneSignalNotification() {
    console.log('notification starts');
    await oneSignalSetup();
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('ids', this.onIds);
  }

  componentWillUnmount() {
    OneSignal.removeEventListener('received', this.onReceived);
    OneSignal.removeEventListener('opened', this.onOpened);
    OneSignal.removeEventListener('ids', this.onIds);
  }

  onReceived(notification) {
    console.log('Notification received: ', notification);
  }

  onOpened(openResult) {
    console.log('Message: ', openResult.notification.payload.body);
    console.log('Data: ', openResult.notification.payload.additionalData);
    console.log('isActive: ', openResult.notification.isAppInFocus);
    // this.props.dispatch({type: OPEN_NOTIFICATION ,openResult});
  }

  onIds(device, props) {
    if (device) {
      //   this.props.dispatch({type: SET_NOTIFICATION_ID, device});
    }
    console.log('Device info: ', device, props);
  }

  render() {
    return (
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor={appColors.STATUS_BAR_COLOR}
        translucent={true}
      />
    );
  }
}
