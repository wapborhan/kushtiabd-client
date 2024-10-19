import { Link, NavLink, useLocation } from "react-router-dom";
import { navData } from "./headData";

const Header = () => {
  const { pathname } = useLocation();

  return (
    <>
      <div className="topb-bar bg-[#1d2538] border-b-2 border-[#fca120] py-2 px-4 text-white flex justify-between">
        <div className="time">Today: 22-July-2024, 02:55:00 PM</div>
        <div className="top-menu flex gap-5">
          <div className="social">
            <ul className="flex gap-5">
              <li>FB</li>
              <li>TW</li>
              <li>LN</li>
              <li>YT</li>
            </ul>
          </div>
          <div className="panel">
            <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
      <div className="sticky top-0 z-50">
        <div className="middle-bar bg-white py-4 px-4 flex justify-between  ">
          <div className="logo">
            <Link to="/" className="text-2xl font-bold text-black">
              {/* <img
              src="https://mdsobedalischool.com/wp-content/uploads/sites/3/2023/08/Md-Sobed-Ali-Secondery-School.svgs"
              alt="KushtiBD"
              className="w-60"
            /> */}
              KushtiaBD
            </Link>
          </div>
          <div className="details flex gap-10">
            <div className="info">
              <div className="">স্থাপিত: ১৯৯৬ ইং</div>
              <div className="">ই.আই.আই.এন: 117464</div>
            </div>
            <div className="contact">
              <div className="email">test@gmail.com</div>
              <div className="number"> +88017123456789</div>
            </div>
          </div>
        </div>
        <div className="main-menu bg-[#1d2538] border-b-2 border-primary text-white">
          <div className="flex text-center">
            <NavLink
              to="/"
              className={`${
                pathname === "/"
                  ? "bg-primary text-secondary "
                  : "hover:text-primary"
              } py-2 px-4 transition delay-75`}
            >
              প্রথম পাতা
            </NavLink>
            {navData.map(({ id, link, name }) => {
              return (
                <NavLink
                  key={id}
                  to={link}
                  className={`${
                    pathname === link
                      ? "bg-primary text-secondary"
                      : "hover:text-primary"
                  } py-2 px-4 transition delay-75 `}
                >
                  {name}
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
