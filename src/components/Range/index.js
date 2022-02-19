import "rc-slider/assets/index.css";
import { useState } from "react";
import { Range } from "rc-slider";
import "./range.scss";

function index() {
  const wrapperStyle = { width: 400, margin: 50 };
  const [value, setValue] = useState([0,0]);

  const onSliderChange = (value) => {
    
    setValue(value);
  };

  return (
    <div className="range">
      <Range
        style={wrapperStyle}
        min={0}
        max={200}
        defaultValue={[0, 10]}
        onChange={onSliderChange}
      />
      {value.join("-")}
    </div>
  );
}

export default index;
