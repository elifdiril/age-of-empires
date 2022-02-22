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

export const filterByAge = (age, filters) => {
  return {
    type: FILTER_BY_AGE,
    payload: age,
    filters: filters,
  };
};

export const filterByFood = (food, filters) => {
  return {
    type: FILTER_BY_FOOD,
    payload: food,
    filters: filters,
  };
};

export const filterByGold = (gold, filters) => {
  return {
    type: FILTER_BY_GOLD,
    payload: gold,
    filters: filters,
  };
};

export const filterByWood = (wood, filters) => {
  return {
    type: FILTER_BY_WOOD,
    payload: wood,
    filters: filters,
  };
};
