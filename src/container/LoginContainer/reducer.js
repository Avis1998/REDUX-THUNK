import SplashScreen from 'react-native-splash-screen';
import {HIDE_SPLASH_SCREEN} from './actions';

const initialState = {
  isLoggedIn: false,
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

    default:
      return {
        ...state,
      };
  }
}
