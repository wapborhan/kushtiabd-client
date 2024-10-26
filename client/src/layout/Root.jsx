import { Outlet, useLocation } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Sidebar from "./sidebar/Sidebar";
import { useEffect } from "react";

const Root = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <div
        className="px-32 mx-auto bg-white"
        style={{
          backgroundImage: `url(/images/bg.png)`,
        }}
      >
        <Header />
        <div className="flex justify-between gap-7 bg-white px-32s">
          <div className="pages basis-3/4  p-4">
            <Outlet />
          </div>
          <div className="sidebar w-full basis-1/4 bg-white">
            <Sidebar />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Root;
