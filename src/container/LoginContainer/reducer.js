import SplashScreen from 'react-native-splash-screen';
import {HIDE_SPLASH_SCREEN,LOGIN_DATA_IS_LOADING} from './actions';

const initialState = {
  isLoggedIn: false,
  isLoading  :false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case HIDE_SPLASH_SCREEN:
      setTimeout(() => {
        SplashScreen.hide();
      }, 50);
      return {
        ...state,
        isLoggedIn: action.logState,
      };
    case LOGIN_DATA_IS_LOADING:
        return {
          ...state,
          isLoading: action.isLoading,
        };
    default:
      return {
        ...state,
      };
  }
}
