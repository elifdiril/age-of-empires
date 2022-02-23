import {
  GET_UNITS,
  GET_UNITS_SUCCESS,
  GET_UNITS_FAIL,
  GET_UNIT_DETAILS,
  GET_UNIT_DETAILS_SUCCESS,
  GET_UNIT_DETAILS_FAIL,
  FILTER_BY_AGE,
  FILTER_BY_FOOD,
  FILTER_BY_GOLD,
  FILTER_BY_WOOD,
} from "./actionTypes";

import data from "../../assets/age-of-empires-units.json";
import filterHelper from "../../helpers/filterHelper";

const { units } = data;

const initialState = {
  //units: units,
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

const UnitReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_UNITS:
      state = { ...state, loadingUnits: true };
      break;
    case GET_UNITS_SUCCESS:
      state = { ...state, filteredUnits: action.payload, loadingUnits: false };
      break;
    case GET_UNITS_FAIL:
      state = {
        ...state,
        error: {
          message: "Error",
        },
        loadingUnits: false,
      };
      break;
    case GET_UNIT_DETAILS:
      state = { ...state, loadingUnitDetails: true };
      break;
    case GET_UNIT_DETAILS_SUCCESS:
      state = {
        ...state,
        unit: state.filteredUnits.filter((unit) => unit.id === action.payload),
        loadingUnitDetails: false,
      };
      break;
    case GET_UNIT_DETAILS_FAIL:
      state = {
        ...state,
        error: {
          message: "Error",
        },
        loadingUnitDetails: false,
      };
      break;

    case FILTER_BY_AGE:
      state = {
        ...state,
        filters: { ...action.filters, ageFilter: action.payload },
        filteredUnits: filterHelper(
          { ...action.filters, ageFilter: action.payload },
          units
        ),
      };
      break;

    case FILTER_BY_FOOD:
      state = {
        ...state,
        filters: { ...action.filters, foodFilter: action.payload },
        filteredUnits: filterHelper(
          { ...action.filters, foodFilter: action.payload },
          units
        ),
      };
      break;

    case FILTER_BY_GOLD:
      state = {
        ...state,
        filters: { ...action.filters, goldFilter: action.payload },
        filteredUnits: filterHelper(
          { ...action.filters, goldFilter: action.payload },
          units
        ),
      };
      break;

    case FILTER_BY_WOOD:
      state = {
        ...state,
        filters: { ...action.filters, woodFilter: action.payload },
        filteredUnits: filterHelper(
          { ...action.filters, woodFilter: action.payload },
          units
        ),
      };
      break;

    default:
      state = { ...state };
      break;
  }
  return state;
};

export default UnitReducer;
