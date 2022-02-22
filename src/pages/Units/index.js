import DataTable from "../../components/DataTable";
import AgeFilter from "../../components/AgeFilter";
import Range from "../../components/Range/index";
import { useDispatch, useSelector } from "react-redux";
import { filterByAge } from "../../store/units/actions";

function index() {
  const dispatch = useDispatch();
  const { filters } = useSelector((state) => state.UnitReducer);

  const handleFilter = (e) => {
    dispatch(filterByAge(e.target.name, filters));
  };

  return (
    <div>
      <AgeFilter handleFilter={handleFilter} />
      <br />
      <span>Costs</span>
      <Range />
      <DataTable />
    </div>
  );
}

export default index;
