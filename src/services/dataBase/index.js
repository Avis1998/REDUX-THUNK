import {
  HIDE_SPLASH_SCREEN,
  SAVE_LOGIN_PROFILE,
} from '../../container/LoginContainer/actions';

var SQLite = require('react-native-sqlite-storage');
let db = SQLite.openDatabase({
  name: 'tFinder.db',
  createFromLocation: '~tFinder.db',
  location: 'default',
});

export const lootFromDB = async (props) => {
  SQLite.DEBUG(true);
  SQLite.enablePromise(true);

  db.executeSql('select * from userProfile', [], (res) => {
    var len = res.rows.length;
    var row = {};
    for (let i = 0; i < len; i++) {
      row = res.rows.item(i);
    }
    console.log('row.data ---->>', row);
    if (row) {
      props.dispatch({type: SAVE_LOGIN_PROFILE, UserInfo: row});
    }
  });

  db.executeSql('select * from verified', [], (res) => {
    var len = res.rows.length;
    var row = {};
    for (let i = 0; i < len; i++) {
      row = res.rows.item(i);
    }
    console.log('row.data ---->>', row);
    if (row.uVerified === 'true') {
      props.dispatch({type: HIDE_SPLASH_SCREEN, logState: true});
    } else {
      props.dispatch({type: HIDE_SPLASH_SCREEN, logState: false});
    }
  }).then((db) => {
    console.log('Database open!');
    props.dispatch({type: HIDE_SPLASH_SCREEN, logState: false});
  });
};
