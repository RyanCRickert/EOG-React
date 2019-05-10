import { delay } from "redux-saga";
import { takeEvery, call, put, cancel, all } from "redux-saga/effects";
import API from "../api";
import * as actions from "../actions";

/*
  call invokes a method
  put dispatches an action
  takeEvery watches actions and executes a function
*/

function* watchFetchDrone(action) {
  yield call(delay, 3800);
  const { error, data } = yield call(
    API.getDroneData
  );
  if (error) {
    console.log({ error });
    yield put({ type: actions.API_ERROR, code: error.code });
    yield cancel();
    return;
  }
  yield put({ type: actions.FETCH_DRONE_DATA, drone: data });
}

function* watchDroneLoad() {
  yield all([
    takeEvery(actions.FETCH_DRONE_DATA, watchFetchDrone)
  ]);
}

export default [watchDroneLoad];
