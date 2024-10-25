import { FaCheck, FaFolder } from "react-icons/fa";
import { BsFillCalendar2DateFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const QuestCard = () => {
  return (
    <div className="card border-b-2 border-primary p-3">
      <div className="flex justify-between gap-3 ">
        <div className="flex gap-3 flex-1">
          <div className="userImg flex-none ">
            <img src="/images/avatar.png" alt="" className="w-[70px]" />
          </div>
          <div className="quest flex-auto space-y-3">
            <Link to={`/answare/1`}>
              <h1 className="text-xl font-bold">
                Quest Quest Quest Quest Quest?
              </h1>
            </Link>
            <div className="desc flex gap-7">
              <span className="px-2 py-1 rounded-md text-xs bg-secondary text-white capitalize flex gap-2 items-center">
                <FaCheck /> solved
              </span>{" "}
              <span className="flex gap-2 items-center">
                <BsFillCalendar2DateFill /> 25-oct-2024
              </span>{" "}
              <span className="flex gap-2 items-center">
                <FaFolder /> Categories
              </span>
            </div>
          </div>
        </div>
        <div className="views flex-none border-primary border-2 text-center rounded-md">
          <h1 className="text-xl font-bold py-2 px-5">5</h1>
          <div className="border-t-2 border-primary">views</div>
        </div>
        <div className="views flex-none border-primary border-2 text-center rounded-md">
          <h1 className="text-xl font-bold py-2 px-5">5</h1>
          <div className="border-t-2 border-primary">ans</div>
        </div>
      </div>
    </div>
  );
};

export default QuestCard;
