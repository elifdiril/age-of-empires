import filterHelper from "../helpers/filterHelper";

import data from "../assets/age-of-empires-units.json";

const { units } = data;

describe("Filter helper tests", () => {
  test("init filter", () => {
    const filters = {
      ageFilter: "all",
      woodFilter: "",
      foodFilter: "",
      goldFilter: "",
    };
    const names = filterHelper(filters, units);

    expect(names).toEqual(units);
  });

  test("init filter", () => {
    const filters = {
      ageFilter: "Feudal",
      woodFilter: "",
      foodFilter: "",
      goldFilter: "",
    };
    const names = filterHelper(filters, units);

    expect(names.length).toEqual(9);
  });

  test("init filter", () => {
    const filters = {
      ageFilter: "Feudal",
      woodFilter: [0, 50],
      foodFilter: "",
      goldFilter: "",
    };
    const names = filterHelper(filters, units);

    expect(names.length).toEqual(3);
  });

  test("init filter", () => {
    const filters = {
      ageFilter: "all",
      woodFilter: "",
      foodFilter: "",
      goldFilter: [0, 24],
    };
    const names = filterHelper(filters, units);

    expect(names.length).toEqual(6);
  });

  test("init filter", () => {
    const filters = {
      ageFilter: "Feudal",
      woodFilter: "",
      foodFilter: [0, 100],
      goldFilter: "",
    };
    const names = filterHelper(filters, units);

    expect(names.length).toEqual(4);
  });
});
