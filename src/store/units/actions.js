import {
    GET_UNITS,
    GET_UNITS_SUCCESS,
    GET_UNITS_FAIL,
    GET_UNIT_DETAILS,
    GET_UNIT_DETAILS_SUCCESS,
    GET_UNIT_DETAILS_FAIL,
  } from "./actionTypes";
  
  export const getUnits = () => {
    return {
      type: GET_UNITS,
    };
  };
  
  export const getUnitsSuccess = (units) => {
    return {
      type: GET_UNITS_SUCCESS,
      payload: units,
    };
  };
  
  export const getUnitsFail = (error) => {
    return {
      type: GET_UNITS_FAIL,
      payload: error,
    };
  };
  
  export const getUnitDetails = (id) => {
    return {
      type: GET_UNIT_DETAILS,
      payload: id,
    };
  };
  
  export const getUnitDetailsSuccess = (unit) => {
    return {
      type: GET_UNIT_DETAILS_SUCCESS,
      payload: unit,
    };
  };
  
  export const getUnitDetailsFail = (error) => {
    return {
      type: GET_UNIT_DETAILS_FAIL,
      payload: error,
    };
  };