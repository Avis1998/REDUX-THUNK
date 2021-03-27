// @flow
import * as React from 'react';
import LoginScreen from '../../stories/screens/Login';//IMPORT THE LOGIN SCREEN
import {connect} from 'react-redux';
import { Login } from "./actions"

class LoginContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <LoginScreen
               navigation={this.props.navigation}
               isLoading={this.props.isLoading}
               Login = {this.props.Login}  
           />;
  }
}

function bindAction(dispatch) {
  return {
    Login : (name,passwordof) => {
      dispatch(Login(name,passwordof));
      // console.log('username CONTAINER',name)
      // console.log('password CONTAINER',passwordof)
    },
  };
}

const mapStateToProps = (state) => ({
  isLoading: state.LoginReducer.isLoading,
});

export default connect(mapStateToProps, bindAction)(LoginContainer);
