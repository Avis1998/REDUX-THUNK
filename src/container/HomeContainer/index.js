// @flow
import * as React from 'react';
import HomeScreen from '../../stories/screens/Home/index';
import {connect} from 'react-redux';

class HomeScreenContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <HomeScreen navigation={this.props.navigation}
               //Login = {this.props.Login}  
           />;
  }
}

function bindAction(dispatch) {
  return {
      // console.log('username CONTAINER',name)
      // console.log('password CONTAINER',passwordof)
    
  };
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, bindAction)(HomeScreenContainer);
