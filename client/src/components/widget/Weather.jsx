import { useEffect, useState } from "react";
import axios from "axios";
import { TbRefresh } from "react-icons/tb";

const Weather = () => {
  const [location, setLocation] = useState([]);
  const [current, setCurrent] = useState([]);
  const [c2f, setc2f] = useState(true);

  const { name, country } = location;
  const { condition, temp_c, temp_f, wind_kph, humidity, vis_km } = current;

  useEffect(() => {
    axios
      .get(
        `https://api.weatherapi.com/v1/forecast.json?key=ff9b41622f994b1287a73535210809&q=kushtia&days=1`,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          },
        },
      )
      .then((res) => {
        setLocation(res.data.location);
        setCurrent(res.data.current);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="president border-2 border-[#fca120]">
      <div className="bg-[#fca120] p-2">
        <h2 className="text-center text-xl text-white font-bold">আবহাওয়া</h2>
      </div>
      <div className="w-full max-w-screen-sm bg-white p-10 ">
        <div className="flex justify-between">
          <div className="flex flex-col relative">
            <span className="text-4xl font-bold">
              {c2f ? `${temp_c} °C` : `${temp_f} °F`}{" "}
              <sup
                onClick={() => setc2f(!c2f)}
                className="absolute -top-3 -right-2 cursor-pointer"
              >
                {c2f
                  ? (
                    <TbRefresh className="transition-all rotate-0 duration-200 ease-in-out" />
                  )
                  : (
                    <TbRefresh className="transition-all rotate-180 duration-200 ease-in-out" />
                  )}
              </sup>
            </span>

            <span className="font-semibold mt-1 text-gray-500">
              {name}, {country}
            </span>
          </div>
          <img src={condition?.icon} alt={name} />
        </div>
        <h2 className="mt-3">{condition?.text}</h2>
        <div className="flex justify-between mt-12">
          <div className="flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="28"
              height="28"
              fill="rgba(240,187,64,1)"
            >
              <path d="M10.5 17H4V15H10.5C12.433 15 14 16.567 14 18.5C14 20.433 12.433 22 10.5 22C8.99957 22 7.71966 21.0559 7.22196 19.7293L9.09513 19.0268C9.30843 19.5954 9.85696 20 10.5 20C11.3284 20 12 19.3284 12 18.5C12 17.6716 11.3284 17 10.5 17ZM5 11H18.5C20.433 11 22 12.567 22 14.5C22 16.433 20.433 18 18.5 18C16.9996 18 15.7197 17.0559 15.222 15.7293L17.0951 15.0268C17.3084 15.5954 17.857 16 18.5 16C19.3284 16 20 15.3284 20 14.5C20 13.6716 19.3284 13 18.5 13H5C3.34315 13 2 11.6569 2 10C2 8.34315 3.34315 7 5 7H13.5C14.3284 7 15 6.32843 15 5.5C15 4.67157 14.3284 4 13.5 4C12.857 4 12.3084 4.40463 12.0951 4.97317L10.222 4.27073C10.7197 2.94414 11.9996 2 13.5 2C15.433 2 17 3.567 17 5.5C17 7.433 15.433 9 13.5 9H5C4.44772 9 4 9.44772 4 10C4 10.5523 4.44772 11 5 11Z">
              </path>
            </svg>
            <span className="font-semibold mt-1 text-sm">{wind_kph} km/h</span>
            <span className="text-xs font-semibold text-gray-400">Wind</span>
          </div>
          <div className="flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="28"
              height="28"
              fill="rgba(240,187,64,1)"
            >
              <path d="M12 3.09723L7.05025 8.04697C4.31658 10.7806 4.31658 15.2128 7.05025 17.9465C9.78392 20.6801 14.2161 20.6801 16.9497 17.9465C19.6834 15.2128 19.6834 10.7806 16.9497 8.04697L12 3.09723ZM12 0.268799L18.364 6.63276C21.8787 10.1475 21.8787 15.846 18.364 19.3607C14.8492 22.8754 9.15076 22.8754 5.63604 19.3607C2.12132 15.846 2.12132 10.1475 5.63604 6.63276L12 0.268799Z">
              </path>
            </svg>
            <span className="font-semibold mt-1 text-sm">{humidity}%</span>
            <span className="text-xs font-semibold text-gray-400">
              Humidity
            </span>
          </div>
          <div className="flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="rgba(240,187,64,1)"
            >
              <path d="M12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3ZM12.0003 19C16.2359 19 19.8603 16.052 20.7777 12C19.8603 7.94803 16.2359 5 12.0003 5C7.7646 5 4.14022 7.94803 3.22278 12C4.14022 16.052 7.7646 19 12.0003 19ZM12.0003 16.5C9.51498 16.5 7.50026 14.4853 7.50026 12C7.50026 9.51472 9.51498 7.5 12.0003 7.5C14.4855 7.5 16.5003 9.51472 16.5003 12C16.5003 14.4853 14.4855 16.5 12.0003 16.5ZM12.0003 14.5C13.381 14.5 14.5003 13.3807 14.5003 12C14.5003 10.6193 13.381 9.5 12.0003 9.5C10.6196 9.5 9.50026 10.6193 9.50026 12C9.50026 13.3807 10.6196 14.5 12.0003 14.5Z">
              </path>
            </svg>
            <span className="font-semibold mt-1 text-sm">{vis_km} km</span>
            <span className="text-xs font-semibold text-gray-400">
              Visibilty
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
