import React from 'react';
import RootNavigation from './navigationRoot';
// import HomeNavigation from './homeNavigation';
import {connect} from 'react-redux';
import {Text} from 'react-native';
import {lootFromDB} from '../services/dataBase';
import { checkInternet } from '../services/Internet';

class AppNavigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    Text.defaultProps = Text.defaultProps || {};
    Text.defaultProps.allowFontScaling = false;
    Text.defaultProps.style = {fontSize: 12};
  }

  componentDidMount() {
    lootFromDB(this.props);
    checkInternet(this.props)
  }

  render() {
    // return this.props.isLoggedIn ? <HomeNavigation /> : <RootNavigation />;
    return <RootNavigation />;
  }
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.LoginReducer.isLoggedIn,
});

export default connect(mapStateToProps)(AppNavigation);
