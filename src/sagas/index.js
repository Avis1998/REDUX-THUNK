import {all, call, fork} from 'redux-saga/effects';

export default function* mySaga() {
  yield all(
    [
      //   ...Object.values(loginRootSaga),
    ].map(fork),
  );
}
