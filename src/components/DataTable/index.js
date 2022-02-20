import BootstrapTable from "react-bootstrap-table-next";
import data from "../../assets/age-of-empires-units.json";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';

function index() {
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
  //console.log(data);
  return (
    <div>
      <BootstrapTable keyField="id" data={data.units} columns={columns} hover pagination={ paginationFactory() }/>
    </div>
  );
}

export default index;
