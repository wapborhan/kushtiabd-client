import { Outlet } from "react-router-dom";
import DashFooter from "./footer/DashFooter";
import DashHeader from "./header/DashHeader";
import DashSidebar from "./sidebar/DashSidebar";

const Dash = () => {
  return (
    <div
      className="px-0 mx-auto"
      style={{
        backgroundImage: `url(/images/bg.png)`,
      }}
    >
      <DashHeader />
      <div className="flex justify-between gap-7 px-8 pt-5">
        <div className="sidebar w-full basis-1/6 bg-white shadow-md rounded-md sticky h-full top-32">
          <DashSidebar />
        </div>
        <div className="pages basis-5/6 bg-white shadow-md rounded-md">
          <div className="p-5">
            <Outlet />
          </div>
          <DashFooter />
        </div>
      </div>
    </div>
  );
};

export default Dash;
