import { all, delay, takeLatest, put, fork } from "redux-saga/effects";
import axios from "axios";

function addPostAPI() {
  return axios.post("/api/post", data);
}

function* addPost(action) {
  try {
    //const result = yield call(addPostAPI, action.data);
    yield delay(1000);
    yield put({
      //성공하면 여기
      type: "ADD_POST_SUCCESS",
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

function* watchAddPost() {
  yield takeLatest("ADD_POST_REQUEST", addPost);
}

export default function* postSaga() {
  yield all([fork(watchAddPost)]);
}
