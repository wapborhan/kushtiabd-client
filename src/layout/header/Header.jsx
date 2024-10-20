import { Link, NavLink, useLocation } from "react-router-dom";
import { navData } from "./headData";
import { FiUser, FiShoppingBag } from "react-icons/fi";
import TopBar from "./TopBar";
import useAuth from "../../hooks/useAuth";

const Header = () => {
  const { pathname } = useLocation();
  const { user, logOut } = useAuth();
  const signOut = () => {
    logOut();
  };
  return (
    <>
      <TopBar />
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
            <Link
              to={user ? "/profile" : "/signin"}
              className="info flex gap-2 justify-center items-center"
            >
              <FiUser size={30} />
              <div className="cont">
                <h1 className="text-sm text-black font-bold">
                  {user ? user?.displayName : "Account"}
                </h1>
                <h1 className="text-xs text-secondary">
                  {user ? "Admin" : "Login"}
                </h1>
              </div>
            </Link>
            <div
              className="info flex gap-2 justify-center items-center"
              onClick={signOut}
            >
              <FiShoppingBag size={30} />
              <div className="cont">
                <h1 className="text-sm text-black font-bold">Cart</h1>
                <h1 className="text-xs text-secondary">3 items</h1>
              </div>
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
