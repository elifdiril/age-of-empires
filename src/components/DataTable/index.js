import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUnitDetailsSuccess } from "../../store/units/actions";

function index() {
  const { filteredUnits, loadingUnits } = useSelector(
    (state) => state.UnitReducer
  );
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const columns = [
    {
      dataField: "id",
      text: "ID",
    },
    {
      dataField: "name",
      text: "Name",
    },
    {
      dataField: "age",
      text: "Age",
    },
    {
      dataField: "cost.Wood",
      text: "Wood",
    },
    {
      dataField: "cost.Food",
      text: "Food",
    },
    {
      dataField: "cost.Gold",
      text: "Gold",
    },
  ];

  const rowEvents = {
    onClick: (_, row) => {
      const { id } = row;
      navigate("/unit/" + id, { id: id });
      dispatch(getUnitDetailsSuccess(id));
    },
  };

  return (
    <div>
      {loadingUnits ? (
        "Loading..."
      ) : (
        <BootstrapTable
          keyField="id"
          data={filteredUnits}
          columns={columns}
          hover
          pagination={paginationFactory()}
          rowEvents={rowEvents}
        />
      )}
    </div>
  );
}

export default index;
