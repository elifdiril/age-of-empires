import configureStore from "redux-mock-store";
import * as _actions from "../store/units/actions";
const middlewares = [];
const mockStore = configureStore(middlewares);

describe("getUsers action creator", () => {
  it("get actions correctly", async () => {
    let store = mockStore({});
    store.dispatch(_actions.getUnits());
    store.dispatch(_actions.getUnitsSuccess());
    store.dispatch(_actions.getUnitsFail());
    store.dispatch(_actions.getUnitDetails());
    store.dispatch(_actions.getUnitDetailsSuccess());
    store.dispatch(_actions.getUnitDetailsFail());
    store.dispatch(_actions.filterByAge());
    store.dispatch(_actions.filterByFood());
    store.dispatch(_actions.filterByGold());
    store.dispatch(_actions.filterByWood());

    const actions = store.getActions();

    expect(actions[0].type).toEqual("GET_UNITS");
    expect(actions[1].type).toEqual("GET_UNITS_SUCCESS");
    expect(actions[2].type).toEqual("GET_UNITS_FAIL");
    expect(actions[3].type).toEqual("GET_UNIT_DETAILS");
    expect(actions[4].type).toEqual("GET_UNIT_DETAILS_SUCCESS");
    expect(actions[5].type).toEqual("GET_UNIT_DETAILS_FAIL");
    expect(actions[6].type).toEqual("FILTER_BY_AGE");
    expect(actions[7].type).toEqual("FILTER_BY_FOOD");
    expect(actions[8].type).toEqual("FILTER_BY_GOLD");
    expect(actions[9].type).toEqual("FILTER_BY_WOOD");
  });
});
