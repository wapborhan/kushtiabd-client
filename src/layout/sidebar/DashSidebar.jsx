import { NavLink, useLocation } from "react-router-dom";
import { DashSideData } from "./DashSideData";

const DashSidebar = () => {
  const { pathname } = useLocation();
  const pathSegments = pathname.split("/");
  const dashboardIndex = pathSegments.indexOf("dashboard");
  const path = `${pathSegments[dashboardIndex + 1]}`;

  return (
    <div className="">
      <ul className="flex flex-col gap-3 p-3">
        {DashSideData.map(({ id, link, name }) => {
          return (
            <NavLink to={link} key={id}>
              <li
                className={`${
                  path === link
                    ? "bg-primary text-secondary"
                    : "bg-secondary text-white"
                } bg-primary px-4 py-2 rounded-md font-medium`}
              >
                {name}
              </li>
            </NavLink>
          );
        })}
      </ul>
    </div>
  );
};

export default DashSidebar;
