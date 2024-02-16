import * as types from "./constant";
import {
  LOAD_USER_DATA,
  CREATE_USER_DATA,
  DEL_USER_DATA,
  UPDATE_USER_DATA,
} from "../Redux/constant";
import {
  take,
  takeEvery,
  takeLatest,
  put,
  all,
  delay,
  fork,
  call,
} from "redux-saga/effects";
import { UserApi, createUserApi, delUserApi, updateUserApi } from "./api";
import {
  loadSuccessData,
  createSuccessData,
  delSuccessData,
  updateSuccessData,
} from "./action";

function* onLoadUsersAsync() {
  try {
    const res = yield call(UserApi);
    if (res.status === 200) {
      yield put(loadSuccessData(res.data));
    }
  } catch (err) {
    console.log("err", err);
  }
}
function* onCreateUsersAsync({ payload }) {
  try {
    const res = yield call(createUserApi, payload);
    if (res.status === 200) {
      yield put(createSuccessData(res.data));
    }
  } catch (err) {
    console.log("err", err);
  }
}
function* onDelUserAsync(userId) {
  try {
    const res = yield call(delUserApi, userId);
    if (res.status === 200) {
      yield put(delSuccessData(userId));
    }
  } catch (err) {
    console.log("err", err);
  }
}
function* onUpdateUsersAsync({ payload: { _id, values } }) {
  try {
    // console.log("pay",payload)
    const res = yield call(updateUserApi, _id, values);
    if (res.status === 200) {
      console.log("deed", res);
      yield put(updateSuccessData());
    }
  } catch (err) {
    console.log("err", err);
  }
}

function* onLoadUsers() {
  yield takeEvery(LOAD_USER_DATA, onLoadUsersAsync);
}
function* onCreateUser() {
  yield takeLatest(CREATE_USER_DATA, onCreateUsersAsync);
}
function* onUpdateUser() {
  yield takeLatest(UPDATE_USER_DATA, onUpdateUsersAsync);
}
function* onDelUser() {
  while (true) {
    const { payload: userId } = yield take(types.DEL_USER_DATA);
    yield call(onDelUserAsync, userId);
  }
}

const userSagas = [
  fork(onLoadUsers),
  fork(onCreateUser),
  fork(onDelUser),
  fork(onUpdateUser),
];

export default function* rootSaga() {
  yield all([...userSagas]);
}
