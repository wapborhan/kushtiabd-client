import { Outlet, useLocation } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Sidebar from "./sidebar/Sidebar";

const Root = () => {
  const { pathname } = useLocation();

  return (
    <div
      className="px-32 mx-auto bg-white"
      style={{
        backgroundImage: `url(/images/bg.png)`,
      }}
    >
      {pathname === "/404" ? "" : <Header />}
      <div className="flex justify-between gap-7 bg-white px-32s">
        <div className="pages basis-3/4 ">
          <Outlet />
        </div>
        <div className="sidebar w-full basis-1/4 bg-white">
          <Sidebar />
        </div>
      </div>
      {pathname === "/404" ? "" : <Footer />}
    </div>
  );
};

export default Root;
