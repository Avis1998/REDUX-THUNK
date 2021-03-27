import { appConfig } from "../../config";
import {
    checkInternetConnection,
    offlineActionTypes
} from "react-native-offline";
import Toast from 'react-native-simple-toast'
// import  * as RootNavigation from '../../Navigation/navigationService';
import * as navigationRef from '../../Navigation/navigationService';

export const HIDE_SPLASH_SCREEN = 'HIDE_SPLASH_SCREEN';
export const SAVE_LOGIN_PROFILE = 'SAVE_LOGIN_PROFILE';

export function IsLoadingAction(status) {
    return {
      type: "LOGIN_DATA_IS_LOADING",
      isLoading: status,
    };
  }

export function Login(name, passwordof) {
    let merchant =  name 
    let password =  passwordof 
    console.log('username ACTN',merchant)
    console.log('password ACTN',password)


    return dispatch => {
        dispatch(IsLoadingAction(true));
        checkInternetConnection().then(isConnected => {
            dispatch({
                type: offlineActionTypes.CONNECTION_CHANGE,
                payload: isConnected
            });
            if (isConnected) {

                fetch(appConfig.url + '/api/User/SelectValidateUser',  {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json-patch+json',
                    },
                    body: JSON.stringify({
                        USER_NAME : merchant,
                        PASSWORD  : password

                    }),
                })
                    .then(response => {
                       console.log('Get Response', response)
                       return  response.json();
                    })
                    .then(json => {
                        console.log("resp Json", json);
                       // console.log('error', json.Status)
                        if (json.Message.Message == "Success") {
                            console.log('login successfully', json)
                            Toast.show('login Successfully', Toast.SHORT)
                            dispatch(IsLoadingAction(false));
                            navigationRef.navigate('Home');
                        }
                        else {
                            //alert('error')
                            dispatch(IsLoadingAction(false));
                            Toast.show('Invalid id or password', Toast.SHORT)
                        }
                        return json
                        // dispatch(IsLoadingAction(false));
                    })
                    .catch(error => {
                        console.log("CATH ERROR", error);
                        dispatch(IsLoadingAction(false));
                       // Toast.show('Invalid id or password', Toast.SHORT)

                    });
            } else {
                dispatch(IsLoadingAction(false));
                Toast.show('Please check internet connectivity !', Toast.SHORT)
            }
        });
    };
}




