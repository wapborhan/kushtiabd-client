import { Link } from "react-router-dom";

const Details = () => {
  return (
    <>
      <div className="border-2 border-primary rounded-lg">
        <div className="bg-primary py-2 px-7 flex justify-between items-center">
          <h2 className="text-2xl text-white font-bold">
            Profile Details
          </h2>
          <Link
            to="/"
            className="py-2 px-4 bg-secondary text-white rounded-md "
          >
            Edit Profile
          </Link>
        </div>
        <div className="about space-y-5 p-5">
          <div className="grid grid-cols-3">
            <div>Full Name</div>
            <div>Borhan Uddin</div>
          </div>
          <div className="grid grid-cols-3">
            <div>Company</div>
            <div></div>
          </div>
          <div className="grid grid-cols-3">
            <div>Contact Phone</div>
            <div></div>
          </div>
          <div className="grid grid-cols-3">
            <div>Company Site</div>
            <div></div>
          </div>
          <div className="grid grid-cols-3">
            <div>Country</div>
            <div></div>
          </div>
          <div className="grid grid-cols-3">
            <div>Allow Changes</div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
