import BootstrapTable from "react-bootstrap-table-next";
import data from "../../assets/age-of-empires-units.json";
import paginationFactory from "react-bootstrap-table2-paginator";
//import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function index() {
  //const { units, loadingUnits } = useSelector((state) => state.UnitReducer);
  const navigate = useNavigate();

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
    /*{
      dataField: "cost",
      text: "costs",
    },*/
  ];

  const rowEvents = {
    onClick: (_, row) => {
      console.log(row.id);
      navigate("/unit/" + row.id, {id: row.id});
    },
  };

  return (
    <div>
      <BootstrapTable
        keyField="id"
        data={data.units}
        columns={columns}
        hover
        pagination={paginationFactory()}
        rowEvents={rowEvents}
      />
    </div>
  );
}

export default index;
