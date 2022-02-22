import React from "react";
import { useState, useEffect } from "react";
import { Range } from "rc-slider";
import "./range.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  filterByWood,
  filterByFood,
  filterByGold,
} from "../../store/units/actions";

const data = [
  {
    id: "1",
    name: "Wood",
    range: [0, 0],
  },
  {
    id: "2",
    name: "Food",
    range: [0, 0],
  },
  {
    id: "3",
    name: "Gold",
    range: [0, 0],
  },
];

const wrapperStyle = { width: 400, margin: 50 };

function index() {
  const dispatch = useDispatch();
  let _data = [...data];
  const [costs, setCosts] = useState({});

  const { filters } = useSelector((state) => state.UnitReducer);

  useEffect(() => {
    _data[0].range = filters.woodFilter ? filters.woodFilter : [0, 0];
    _data[1].range = filters.foodFilter ? filters.foodFilter : [0, 0];
    _data[2].range = filters.goldFilter ? filters.goldFilter : [0, 0];
  }, [_data]);

  const onSliderChange = (range, item) => {
    const { id } = item;
    if (id == 1) {
      dispatch(filterByWood(range, filters));
    }
    if (id == 2) {
      dispatch(filterByFood(range, filters));
    }
    if (id == 3) {
      dispatch(filterByGold(range, filters));
    }
  };

  const toggleHandler = (item) => () => {
    setCosts((state) => ({
      ...state,
      [item.id]: state[item.id]
        ? null
        : {
            id: item.id,
            name: item.name,
          },
    }));
  };

  useEffect(() => {
    for (let cost in costs) {
      if (cost == 1 && costs[1] === null) {
        dispatch(filterByWood("", filters));
      }
      if (cost == 2 && costs[2] === null) {
        dispatch(filterByFood("", filters));
      }
      if (cost == 3 && costs[3] === null) {
        dispatch(filterByGold("", filters));
      }
    }
  }, [costs]);

  return (
    <div className="App">
      {_data &&
        _data.map((item) => {
          return (
            <div key={item.id} className="range">
              <input
                onChange={toggleHandler(item)}
                checked={costs[item.id]}
                type="checkbox"
              />
              <span>{item.name}</span>
              <Range
                disabled={costs[item.id] ? false : true}
                style={wrapperStyle}
                min={0}
                max={200}
                defaultValue={[0, 0]}
                onChange={(val) => onSliderChange(val, item)}
              />
              {item.range.join(" - ")}
            </div>
          );
        })}
    </div>
  );
}

export default index;
