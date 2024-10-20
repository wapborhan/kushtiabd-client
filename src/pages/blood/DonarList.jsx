import DonarCrad from "../../components/shared/DonarCrad";

const DonarList = () => {
  return (
    <div className="donar-list mt-10">
      <div className="grid grid-cols-2 gap-5">
        <DonarCrad />
        <DonarCrad />
        <DonarCrad />
        <DonarCrad />
      </div>
    </div>
  );
};

export default DonarList;
