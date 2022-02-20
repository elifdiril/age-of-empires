import {
    GET_UNITS,
    GET_UNITS_SUCCESS,
    GET_UNITS_FAIL,
    GET_UNIT_DETAILS,
    GET_UNIT_DETAILS_SUCCESS,
    GET_UNIT_DETAILS_FAIL,
  } from "./actionTypes";
  
  const initialState = {
    units: [],
    unit: {},
    loadingUnits: false,
    loadingUnitDetails: false,
    error: {
      message: "",
    },
  };
  
  const UnitReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_UNITS:
        state = { ...state, loadingUnits: true };
        break;
      case GET_UNITS_SUCCESS:
        state = { ...state, units: action.payload, loadingUnits: false };
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
        state = { ...state, unit: action.payload[0], loadingUnitDetails: false };
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
      default:
        state = { ...state };
        break;
    }
    return state;
  };
  
  export default UnitReducer;