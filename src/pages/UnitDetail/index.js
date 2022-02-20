import { useParams } from "react-router-dom";
import data from "../../assets/age-of-empires-units.json";
import DetailTable from "./DetailTable";

function UnitDetail() {
  const { id } = useParams();
  const { units } = data;
  console.log(id);
  const unitDetail = units.find(({ id }) => id === id);

  return (
    <div>
      <DetailTable unitDetail={[unitDetail]} />
    </div>
  );
}

export default UnitDetail;
