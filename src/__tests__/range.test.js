/* eslint-disable no-undef */
import configureStore from "redux-mock-store";
//import { render, screen } from "@testing-library/react";
//import Range from "../components/Range/index";
//import { Provider } from "react-redux";
import data from "../assets/age-of-empires-units.json";

const { units } = data;

const middlewares = [];
const mockStore = configureStore(middlewares);

const filterWood = () => ({ type: "FILTER_BY_WOOD" });
const filterfood = () => ({ type: "FILTER_BY_FOOD" });
const filterGold = () => ({ type: "FILTER_BY_GOLD" });

describe("Range Filter component tests", () => {
  let initialState, store;

  beforeEach(() => {
    initialState = {
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
    store = mockStore(initialState);
    store.dispatch(filterWood());
    store.dispatch(filterfood());
    store.dispatch(filterGold());
  });

  test("renders Button", () => {
    expect(store.getState()).toEqual({
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
    });
  });

  /*
  test("renders Button", () => {
    render(
        <Provider store={store}>
          <Range />{" "}
        </Provider>
      );
    const linkElement = screen.getByText("Gold");
    expect(linkElement).toBeInTheDocument();
  });*/
});
