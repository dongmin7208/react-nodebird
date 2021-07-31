import { all, fork } from "redux-saga/effects";
import postSaga from "./post";
import userSaga from "./user";

//한번에 등록시켜준다
export default function* rootSaga() {
  yield all([
    fork(postSaga), //콜
    fork(userSaga),
  ]);
}
