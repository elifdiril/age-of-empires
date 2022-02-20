import { takeLatest, put } from "redux-saga/effects";

import { GET_UNITS, GET_UNIT_DETAILS } from "./actionTypes";

import {
  getUnitsSuccess,
  getUnitsFail,
  getUnitDetailsSuccess,
  getUnitDetailsFail,
} from "./actions";

import units from "../../assets/age-of-empires-units.json";

function* onGetUnits() {
  try {
    const response = units?.units;
    yield put(getUnitsSuccess(response));
  } catch (error) {
    yield put(getUnitsFail("Something's wrong with units :/"));
  }
}

function* onGetUnitDetails({ payload: id }) {
  try {
    const unit = units?.units.filter((unit) => unit.id === id);
    const response = unit;
    yield put(getUnitDetailsSuccess(response));
  } catch (error) {
    yield put(getUnitDetailsFail("Something's wrong with unit :/"));
  }
}

function* CartSaga() {
  yield takeLatest(GET_UNITS, onGetUnits);
  yield takeLatest(GET_UNIT_DETAILS, onGetUnitDetails);
}

export default CartSaga;
