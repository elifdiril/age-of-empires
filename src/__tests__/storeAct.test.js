import configureStore from "redux-mock-store";
import {
  getUnits,
  getUnitsSuccess,
  getUnitsFail,
  getUnitDetails,
  getUnitDetailsSuccess,
  getUnitDetailsFail,
  filterByAge,
  filterByFood,
  filterByGold,
  filterByWood,
} from "../store/units/actions";
const middlewares = [];
const mockStore = configureStore(middlewares);

describe("getUsers action creator", () => {
  it("get actions correctly", async () => {
    let store = mockStore({});
    store.dispatch(getUnits());
    store.dispatch(getUnitsSuccess());
    store.dispatch(getUnitsFail());
    store.dispatch(getUnitDetails());
    store.dispatch(getUnitDetailsSuccess());
    store.dispatch(getUnitDetailsFail());
    store.dispatch(filterByAge());
    store.dispatch(filterByFood());
    store.dispatch(filterByGold());
    store.dispatch(filterByWood());

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
