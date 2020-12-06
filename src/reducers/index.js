import {combineReducers} from 'redux';
import LoginReducer from '../container/LoginContainer/reducer';
import ServiceReducer from '../services/serviceReducer';
import NavigationReducer from '../Navigation/navigationReducer'
// import { LOGOUT_ACTION_COMPLETE } from '../container/LoginContainer/actions';

const appReducer = combineReducers({
  LoginReducer,
  ServiceReducer,
  NavigationReducer
});
const rootReducer = (state, action) => {
  //   if (action.type === LOGOUT_ACTION_COMPLETE) {
  //     state = undefined
  //   }
  return appReducer(state, action);
};

export default rootReducer;
