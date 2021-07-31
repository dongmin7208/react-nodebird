import { all, call, fork, put, takeLatest, delay } from "redux-saga/effects";
import axios from "axios";

function logInAPI() {
  return axios.post("/api/login", data);
}

function* logIn() {
  try {
    const result = yield call(logInAPI); //요청보내고
    yield put({
      //성공하면 여기
      type: "LOG_IN_SUCCESS",
      data: result.data,
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
  return axios.post("/api/login");
}

function* logOut() {
  try {
    const result = yield call(logOutAPI); //요청보내고
    yield put({
      //성공하면 여기
      type: "LOG_OUT_SUCCESS",
      data: result.data,
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

function addPostAPI() {
  return axios.post("/api/post");
}

function* addPost() {
  try {
    const result = yield call(logInAPI); //요청보내고
    yield put({
      //성공하면 여기
      type: "ADD_POST_SUCCESS",
      data: result.data,
    });
    //성공 결과는result.datam
    // 실패 결과는 err.response.data에 담겨져있음
  } catch (err) {
    yield put({
      //실패하면 여기
      type: "ADD_POST_FAILURE",
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

function* watchAddPost() {
  yield takeLatest("ADD_POST_REQUEST", addPost);
}
//한번에 등록시켜준다
export default function* rootSaga() {
  yield all([
    fork(watchLogIn), //콜
    fork(watchLogOut),
    fork(watchAddPost),
  ]);
}
