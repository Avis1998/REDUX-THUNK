import OneSignal from 'react-native-onesignal';
import {ONE_SIGNAL_APP_ID} from '../../config';

export const oneSignalSetup = () => {
  OneSignal.clearOneSignalNotifications();
  // OneSignal.configure({});
  OneSignal.setRequiresUserPrivacyConsent(false);
  OneSignal.setLogLevel(6, 0);
  OneSignal.init(ONE_SIGNAL_APP_ID);
  OneSignal.setLocationShared(true);
  OneSignal.inFocusDisplaying(2);
};
