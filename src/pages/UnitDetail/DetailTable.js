import BootstrapTable from "react-bootstrap-table-next";
import PropTypes from "prop-types";
import "./table.scss";

function DetailTable({ unitDetail }) {
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
      dataField: "description",
      text: "Description",
    },
    {
      dataField: "expansion",
      text: "Min Required Age",
    },
    {
      dataField: "cost.Wood",
      text: "Wood Cost",
    },
    {
      dataField: "cost.Food",
      text: "Food Cost",
    },
    {
      dataField: "cost.Gold",
      text: "Gold Cost",
    },
    {
      dataField: "build_time",
      text: "Build Time",
    },
    {
      dataField: "reload_time",
      text: "Reload Time",
    },
    {
      dataField: "hit_points",
      text: "Hit Points",
    },
    {
      dataField: "attack",
      text: "Attack",
    },
    {
      dataField: "accuracy",
      text: "Accuracy",
    },
  ];

  return (
    <div>
      <BootstrapTable keyField="id" data={unitDetail} columns={columns} />
    </div>
  );
}

export default DetailTable;

DetailTable.propTypes = {
  unitDetail: PropTypes.array,
};
