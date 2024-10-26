import { useEffect } from "react";
import "./come.css";
const CoomingSoon = () => {
  useEffect(() => {
    const seconds = document.querySelector(".seconds .number"),
      minutes = document.querySelector(".minutes .number"),
      hours = document.querySelector(".hours .number"),
      days = document.querySelector(".days .number");

    let secValue = 5,
      minValue = 36,
      hourValue = 12,
      dayValue = 66;

    const timeFunction = setInterval(() => {
      secValue--;

      if (secValue === 0) {
        minValue--;
        secValue = 60;
      }
      if (minValue === 0) {
        hourValue--;
        minValue = 60;
      }
      if (hourValue === 0) {
        dayValue--;
        hourValue = 24;
      }

      if (dayValue === 0) {
        clearInterval(timeFunction);
      }
      seconds.textContent = secValue < 10 ? `0${secValue}` : secValue;
      minutes.textContent = minValue < 10 ? `0${minValue}` : minValue;
      hours.textContent = hourValue < 10 ? `0${hourValue}` : hourValue;
      days.textContent = dayValue < 10 ? `0${dayValue}` : dayValue;
    }, 1000); //1000ms = 1s
  }, []);

  return (
    <section className="container">
      <img
        src="https://images.unsplash.com/photo-1625558298116-38f0173a522c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        alt=""
        className="image"
      />
      <header>KushtiaBD</header>

      <header>Website Coming Soon</header>
      <p>
        We are excited to announce that we will be launching soon and {"can't"}
        {" "}
        wait to share our new platform with you.
      </p>
      <div className="time-content">
        <div className="time days">
          <span className="number"></span>
          <span className="text">days</span>
        </div>
        <div className="time hours">
          <span className="number"></span>
          <span className="text">hours</span>
        </div>
        <div className="time minutes">
          <span className="number"></span>
          <span className="text">minutes</span>
        </div>
        <div className="time seconds">
          <span className="number"></span>
          <span className="text">seconds</span>
        </div>
      </div>
      {
        /* <div className="email-content">
        <p>Subscribe now to get the latest updates!</p>
        <div className="input-box">
          <input type="email" placeholder="Enter your email..." />
          <button>Notify Me</button>
        </div>
      </div> */
      }
    </section>
  );
};

export default CoomingSoon;
