import React from "react";
import { useState, useEffect } from "react";
import { Range } from "rc-slider";
import "./range.scss";
import PropTypes from "prop-types";

const data = [
  {
    id: "1",
    name: "Wood",
  },
  {
    id: "2",
    name: "Food",
  },
  {
    id: "3",
    name: "Gold",
  },
];

function index({ onSliderChange, range }) {
  const wrapperStyle = { width: 400, margin: 50 };
  const [costs, setCosts] = useState({});

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
    console.log(costs);
  }, [costs]);

  return (
    <div className="App">
      {data.map((item) => {
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
              defaultValue={[0, 10]}
              onChange={onSliderChange}
            />
            {range.join("-")}
          </div>
        );
      })}
    </div>
  );
}

export default index;

index.propTypes = {
  onSliderChange: PropTypes.func,
  range: PropTypes.array,
};
