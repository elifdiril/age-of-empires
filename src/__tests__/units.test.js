/* eslint-disable no-undef */
import configureStore from "redux-mock-store";

const middlewares = [];
const mockStore = configureStore(middlewares);

const filterAge = () => ({ type: "FILTER_BY_AGE" });
const filterWood = () => ({ type: "FILTER_BY_WOOD" });
const filterfood = () => ({ type: "FILTER_BY_FOOD" });
const filterGold = () => ({ type: "FILTER_BY_GOLD" });

const getUnits = () => ({ type: "GET_UNITS" });
const getUnitsSuccess = () => ({ type: "GET_UNITS_SUCCESS" });
const getUnitDetails = () => ({ type: "GET_UNIT_DETAILS" });
const getUnitDetailsSuccess = () => ({ type: "GET_UNIT_DETAILS_SUCCESS" });


describe("units page tests", () => {
  let initialState, store;
  beforeEach(() => {
    initialState = {};
    store = mockStore(initialState);
  });

  it("should dispatch filter age action", () => {
    store.dispatch(filterAge());

    const actions = store.getActions();
    const expectedPayload = { type: "FILTER_BY_AGE" };
    expect(actions).toEqual([expectedPayload]);
  });

  it("should dispatch filter wood action", () => {
    store.dispatch(filterWood());

    const actions = store.getActions();
    const expectedPayload = { type: "FILTER_BY_WOOD" };
    expect(actions).toEqual([expectedPayload]);
  });

  it("should dispatch filter food action", () => {
    store.dispatch(filterfood());

    const actions = store.getActions();
    const expectedPayload = { type: "FILTER_BY_FOOD" };
    expect(actions).toEqual([expectedPayload]);
  });

  it("should dispatch filter gold action", () => {
    store.dispatch(filterGold());

    const actions = store.getActions();
    const expectedPayload = { type: "FILTER_BY_GOLD" };
    expect(actions).toEqual([expectedPayload]);
  });

  it("should dispatch filter age action", () => {
    store.dispatch(getUnits());

    const actions = store.getActions();
    const expectedPayload = { type: "GET_UNITS" };
    expect(actions).toEqual([expectedPayload]);
  });

  it("should dispatch filter wood action", () => {
    store.dispatch(getUnitsSuccess());

    const actions = store.getActions();
    const expectedPayload = { type: "GET_UNITS_SUCCESS" };
    expect(actions).toEqual([expectedPayload]);
  });

  it("should dispatch filter food action", () => {
    store.dispatch(getUnitDetails());

    const actions = store.getActions();
    const expectedPayload = { type: "GET_UNIT_DETAILS" };
    expect(actions).toEqual([expectedPayload]);
  });

  it("should dispatch filter gold action", () => {
    store.dispatch(getUnitDetailsSuccess());

    const actions = store.getActions();
    const expectedPayload = { type: "GET_UNIT_DETAILS_SUCCESS" };
    expect(actions).toEqual([expectedPayload]);
  });
});
