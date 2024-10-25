import QuestCard from "./QuestCard";
import { AiFillDislike, AiFillLike } from "react-icons/ai";

const Answare = () => {
  return (
    <div className="m-5">
      <QuestCard />

      <div className="ans">
        <div className="card p-3">
          <div className="flex justify-between gap-3 items-start ">
            <div className="userImg flex-none ">
              <img src="/images/avatar.png" alt="" className="w-[70px]" />
            </div>
            <div className="quest flex-auto space-y-3 bg-slate-200 rounded-md">
              <div className="text-xl flex gap-5 font-bold border-b-2 p-3 border-primary">
                <div className="name">
                  Borhan <sup className="text-primary">255</sup>
                </div>{" "}
                <div className="date">22-oct-2024</div>
              </div>
              <div className="content py-2 px-5">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                  ipsam libero quo eos consequuntur aperiam officia ratione
                  maiores! Numquam cum ut, maxime magnam voluptate quos odit
                  beatae eaque optio rem!
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                  ipsam libero quo eos consequuntur aperiam officia ratione
                  maiores! Numquam cum ut, maxime magnam voluptate quos odit
                  beatae eaque optio rem!
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                  ipsam libero quo eos consequuntur aperiam officia ratione
                  maiores! Numquam cum ut, maxime magnam voluptate quos odit
                  beatae eaque optio rem!
                </p>
              </div>
            </div>

            <div className="views flex flex-col gap-2 items-center justify-center flex-none ">
              <div className="border-2 p-1 rounded-sm">
                <AiFillLike />
              </div>
              <div className="border-2 p-1 rounded-sm">
                <AiFillDislike />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Answare;
