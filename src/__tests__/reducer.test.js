import reducer from "../store/units/reducers";
import * as actions from "../store/units/actions";
import expect from "expect";
import data from "../assets/age-of-empires-units.json";

const { units } = data;

const initialState = {
  unit: {},
  loadingUnits: false,
  loadingUnitDetails: false,
  error: {
    message: "",
  },
  filters: {
    ageFilter: "all",
    woodFilter: "",
    foodFilter: "",
    goldFilter: "",
  },
  filteredUnits: units,
};

describe("team reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });
});

/*
it("should handle GET_UNITS", () => {
  const getUnitAction = {
    type: actions.getUnits,
  };
  expect(reducer({}, getUnitAction)).toEqual({  loadingUnits: true });
});*/

it("should handle GET_UNITS_SUCCESS", () => {
  const getUnitSuccessAction = {
    type: actions.getUnitsSuccess,
    payload: units,
  };
  expect(reducer({ ...initialState }, getUnitSuccessAction)).toEqual({
    ...initialState,
    filteredUnits: units,
    loadingUnits: false,
  });
});

it("should handle GET_UNIT_DETAILS_SUCCESS", () => {
  const getUnitDetailsSuccessAction = {
    type: actions.getUnitDetailsSuccess,
    payload: {},
  };
  expect(reducer({ ...initialState }, getUnitDetailsSuccessAction)).toEqual({
    ...initialState,
    unit: {},
    loadingUnitDetails: false,
  });
});
/*
it("should handle GET_UNITS_FAIL", () => {
  const failAction = {
    type: actions.getUnitsFail,
    payload: "Error",
  };
  expect(reducer({...initialState}, failAction)).toEqual({
    ...initialState,
    error: {
      message: "Error",
      loadingUnits: false,
    },
  });
});*/
