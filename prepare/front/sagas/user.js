import { all, delay, fork } from "redux-saga/effects";
import axios from "axios";
import { takeLatest } from "@redux-saga/core/effects";

function logInAPI(data) {
  return axios.post("/api/login", data);
}

function* logIn(action) {
  try {
    console.log("saga logIn");
    //   const result = yield call(logInAPI); //요청보내고
    yield delay(1000);
    yield put({
      //성공하면 여기
      type: "LOG_IN_SUCCESS",
      data: action.data,
    });
    //성공 결과는result.datam
    // 실패 결과는 err.response.data에 담겨져있음
  } catch (err) {
    yield put({
      //실패하면 여기
      type: "LOG_IN_FAILURE",
      data: err.response.data,
    });
  }
}

function logOutAPI() {
  return axios.post("/api/logout");
}

function* logOut() {
  try {
    //const result = yield call(logOutAPI);
    yield delay(1000);
    yield put({
      //성공하면 여기
      type: "LOG_OUT_SUCCESS",
    });
    //성공 결과는result.datam
    // 실패 결과는 err.response.data에 담겨져있음
  } catch (err) {
    yield put({
      //실패하면 여기
      type: "LOG_OUT_FAILURE",
      data: err.response.data,
    });
  }
}

//비유들면 이벤트리스너　　//일회성임 한번하면 끝
function* watchLogIn() {
  yield takeLatest("LOG_IN_REQUEST", logIn); //로그인이 실행되면서 위로
}

function* watchLogOut() {
  yield takeLatest("LOG_OUT_REQUEST", logOut);
}

export default function* userSaga() {
  yield all([fork(watchLogIn), fork(watchLogOut)]);
}
