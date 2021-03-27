import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import thunk from "redux-thunk";
import rootReducer from '../reducers/index';

const loggerMiddleware = createLogger(); // to use console of redux
const middleware = [thunk, loggerMiddleware];

export default createStore(
  rootReducer,
  applyMiddleware(...middleware),
);

// return fetch(appConfig.url + '/api/User/SelectValidateUser', {
//   method: 'POST',
//   headers: {
//       'Content-Type': 'application/json-patch+json',
//   },
//   body: JSON.stringify({
//       USER_NAME: this.state.merchant,
//       PASSWORD: this.state.password,
//       // USER_TYPE: 0,
//       // EXTERNAL_uSER_ID: 0
//   }),
// })
//   .then(response => response.json())
//   .then(json => {
//       console.log('append', json)
//       console.log('error', json.Status)
//       this.setState({ isloading: false })

//       if (json.Message.Message == "Success") {
//           // AsyncStorage.setItem('isLogin', JSON.stringify(json))

//           this.props.navigation.navigate('Home')
//           //console.log('User id', json.id) 
//           console.log('login successfully', json)
//           Toast.show('login Successfully', Toast.SHORT)
//           this.clearText()
//       } else {
//           //alert('error')
//           Toast.show('Invalid id or password', Toast.SHORT)
//       }

//       return json
//   })
//   .catch(error => {
//       console.error(error)
//   })