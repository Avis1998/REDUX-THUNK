import {CHANGE_INTERNET_CONNECTION} from './Internet';

const initialState = {
  isConnected: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CHANGE_INTERNET_CONNECTION:
      return {
        ...state,
        isConnected: action.isConnected,
      };

    default:
      return {
        ...state,
      };
  }
}
