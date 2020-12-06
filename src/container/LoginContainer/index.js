// @flow
import * as React from 'react';
import LoginScreen from '../../stories/screens/Login';
import {connect} from 'react-redux';

class LoginContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <LoginScreen navigation={this.props.navigation} />;
  }
}

function bindAction(dispatch) {
  return {};
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, bindAction)(LoginContainer);
