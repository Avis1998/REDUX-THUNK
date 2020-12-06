import NetInfo from '@react-native-community/netinfo';

export const CHANGE_INTERNET_CONNECTION = 'CHANGE_INTERNET_CONNECTION';

export const checkInternet = (props) => {
  NetInfo.fetch().then((isConnected) => {
    props.dispatch({type: CHANGE_INTERNET_CONNECTION, isConnected});
  });
  const checkInternet = NetInfo.addEventListener((state) => {
    console.log('Connection check', state);
    console.log('Is connected?', state.isConnected);
    let isConnected = state.isConnected;
    props.dispatch({type: CHANGE_INTERNET_CONNECTION, isConnected});
  });
};
