import { useEffect, useState } from "react";

const TopBar = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const updateTime = () => setTime(new Date());

    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatDate = (date) => {
    const options = { day: "2-digit", month: "short", year: "numeric" };
    return date
      .toLocaleDateString("en-GB", options)
      .replace(/(\d{2}) (\w{3}) (\d{4})/, "$1-$2-$3");
  };

  const formattedDate = formatDate(time);
  return (
    <div className="topb-bar bg-[#1d2538] border-b-2 border-[#fca120] py-2 px-4 text-white flex justify-between">
      <div className="time">
        Today: {formattedDate} {"_"} Now: {time.toLocaleTimeString()}
      </div>
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
          <div>Login</div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
