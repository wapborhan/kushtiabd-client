import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialSignIn from "./SocialSignIn";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import { TbLoader3 } from "react-icons/tb";

const SignIn = () => {
  const { logIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    logIn(email, password)
      .then((result) => {
        const user = result.user;
        if (user) {
          navigate(location?.state ? location?.state : "/");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div
      className="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center"
      style={{
        backgroundImage: `url(/images/bg.png)`,
      }}
    >
      <div className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md">
        <div className="p-4 py-6 text-white bg-secondary md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly">
          <div className="my-3 text-4xl font-bold tracking-wider text-center">
            <Link to="/">
              {/* <img src="https://i.ibb.co/1LV8nQP/logo.png" alt="" /> */}
              KushtiaBD
            </Link>
          </div>
          <p className="mt-6 font-normal text-center text-gray-400 md:mt-0">
            With the power of K-WD, you can now focus only on functionaries for
            your digital products, while leaving the UI design on us!
          </p>
          <p className="flex flex-col items-center justify-center mt-10 text-center">
            <span>{"Don't"} have an account?</span>
            <Link to="/signup" className="underline">
              Get Started!
            </Link>
          </p>
          {/* <p className="mt-6 text-sm text-center text-gray-300">
              Read our
              <a href="#" className="underline">
                terms
              </a>
              and
              <a href="#" className="underline">
                conditions
              </a>
            </p> */}
        </div>
        <div className="p-5 bg-white md:flex-1">
          <h3 className="my-4 text-2xl font-semibold text-gray-700">
            Account Login
          </h3>
          <form onSubmit={handleLogin} className="flex flex-col space-y-5">
            <div className="flex flex-col space-y-1">
              <label className="text-sm font-semibold text-gray-500">
                Email address
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                autoFocus
                defaultValue="borhanuddin979@gmail.com"
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-sm font-semibold text-gray-500"
                >
                  Password
                </label>
                <a
                  href="#"
                  className="text-sm text-primary hover:underline focus:text-secondary"
                >
                  Forgot Password?
                </a>
              </div>
              <input
                type="password"
                name="password"
                placeholder="password"
                defaultValue="Abc@123"
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            {/* <div className="flex items-center space-x-2">
              <label className="label">
                <LoadCanvasTemplate /> 
              </label>
              <input
                // onBlur={handleValidateCaptcha}
                type="text"
                name="captcha"
                placeholder="type the captcha above"
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div> */}
            <div>
              <button
                type="submit"
                // disabled={disabled}
                value="Login"
                className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-primary rounded-md shadow hover:bg-secondary focus:outline-none focus:ring-blue-200 focus:ring-4"
                onClick={() => setLoading(true)}
              >
                {loading ? (
                  <TbLoader3 className="text-[1.8rem] animate-spin text-white  mx-auto" />
                ) : (
                  "Log in"
                )}
              </button>
            </div>
            <div className="flex flex-col space-y-5">
              <span className="flex items-center justify-center space-x-2">
                <span className="h-px bg-gray-400 w-14"></span>
                <span className="font-normal text-gray-500">or login with</span>
                <span className="h-px bg-gray-400 w-14"></span>
              </span>
              <div className="flex flex-col space-y-4">
                <SocialSignIn />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
