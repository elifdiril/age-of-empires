import DataTable from "../../components/DataTable";
import AgeFilter from "../../components/AgeFilter";
import Range from "../../components/Range/index";
import { useState } from "react";
//import { useDispatch } from "react-redux";
//import { getUnits } from "../../store/units/actions";

function index() {
  //let dispatch = useDispatch();
  const [val, setVal] = useState("");
  const [range, setRange] = useState([0, 0]);

  const onSliderChange = (range) => {
    setRange(range);
  };

  const handleFilter = (e) => {
    setVal(e.target.name);
  };

  return (
    <div>
      <AgeFilter handleFilter={handleFilter} /> {val}
      <br />
      <span>Costs</span>
      <Range onSliderChange={onSliderChange} range={range} />
      <DataTable />
    </div>
  );
}

export default index;
