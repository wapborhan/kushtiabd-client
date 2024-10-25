import { useEffect, useState } from "react";
import DonarList from "./DonarList";
import useDivision from "../../../hooks/data/useDivision";
import useDistrict from "../../../hooks/data/useDistrict";
import useUpazila from "../../../hooks/data/useUpazila";
import Select from "../../../components/shared/Select";

const Search = () => {
  const [divisions] = useDivision();
  const [districts] = useDistrict();
  const [upazilas] = useUpazila();
  //
  const [division, setDivision] = useState();
  const [district, setDistrict] = useState();
  const [upazila, setUpazila] = useState();
  const [bloodGroup, setBloodGroup] = useState();
  //
  const [filteredDistricts, setFilteredDistricts] = useState([]);
  const [filteredUpazila, setFilteredUpazila] = useState();

  useEffect(() => {
    const filteredDistricts = divisions
      ? districts.filter((district) => district?.division_id === division?.id)
      : [];

    setFilteredDistricts(filteredDistricts);

    const filteredUpazila = districts
      ? upazilas.filter((upazila) => upazila?.district_id === district?.id)
      : [];

    setFilteredUpazila(filteredUpazila);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [division, district]);

  const onSubmitData = (e) => {
    e.preventDefault();
    const searchData = {
      division: division.name.toLowerCase(),
      district: district.name.toLowerCase(),
      upazila: upazila.name.toLowerCase(),
      bloodGroup: bloodGroup.name,
    };

    console.log(searchData);
  };

  return (
    <>
      <div className="president border-2 border-primary">
        <div className="bg-primary p-2">
          <h2 className="ml-6 text-2xl text-white font-bold">রক্তদাতা খুজুন</h2>
        </div>
        <div className="about space-y-4 p-4">
          <div className="donar">
            <form onSubmit={onSubmitData}>
              <div className="grid grid-cols-5 gap-5">
                <div className="division">
                  <Select
                    name="Division"
                    disableCon={true}
                    setData={setDivision}
                    data={divisions}
                  />
                </div>
                <div className="district">
                  <Select
                    name="District"
                    setData={setDistrict}
                    disableCon={division}
                    data={filteredDistricts}
                  />
                </div>
                <div className="upozila">
                  <Select
                    name="Upozila"
                    setData={setUpazila}
                    disableCon={district}
                    data={filteredUpazila}
                  />
                </div>
                <div className="group">
                  <Select
                    name="Blood Group"
                    setData={setBloodGroup}
                    disableCon={true}
                    data={[
                      { id: "1", name: "A+" },
                      { id: "2", name: "A-" },
                    ]}
                  />
                </div>
                <div className="button">
                  <button className="bg-primary p-2 w-full" type="submit">
                    Search
                  </button>
                </div>
              </div>
            </form>
            <DonarList />
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
