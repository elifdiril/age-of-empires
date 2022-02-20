import { all, fork } from "redux-saga/effects";

import UnitSaga from "./units/saga";

export default function* rootSaga() {
  yield all([fork(UnitSaga)]);
}