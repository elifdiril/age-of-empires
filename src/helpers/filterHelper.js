const filterHelper = (filters, initialUnits) => {
  let filteredUnits = initialUnits;

  if (filters.ageFilter !== "all") {
    filteredUnits = filteredUnits.filter(
      (unit) => unit.age === filters.ageFilter
    );
  }

  if (filters.woodFilter !== "") {
    filteredUnits = filteredUnits.filter(
      (unit) =>
        unit.cost?.Wood > filters.woodFilter[0] &&
        unit.cost?.Wood < filters.woodFilter[1]
    );
  }

  if (filters.foodFilter !== "") {
    filteredUnits = filteredUnits.filter(
      (unit) =>
        unit.cost?.Food > filters.foodFilter[0] &&
        unit.cost?.Food < filters.foodFilter[1]
    );
  }
  if (filters.goldFilter !== "") {
    filteredUnits = filteredUnits.filter(
      (unit) =>
        unit.cost?.Gold > filters.goldFilter[0] &&
        unit.cost?.Gold < filters.goldFilter[1]
    );
  }

  return filteredUnits;
};

export default filterHelper;
