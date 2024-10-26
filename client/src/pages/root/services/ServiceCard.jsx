import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";
import { useState } from "react";

const ServiceCard = () => {
  const [bookmark, setBookmark] = useState(false);
  return (
    <div className="card relative">
      <article className="overflow-hidden border-2 rounded-lg shadow-lg">
        <Link to="/services/details/1">
          <img
            alt="Placeholder"
            className="block h-auto w-full"
            src="https://picsum.photos/600/400/?random"
          />
        </Link>

        <div className="content p-4 space-y-3">
          <header className="space-y-3">
            <div className="flex items-center justify-between leading-tight">
              <Link
                className="flex items-center  text-black"
                to="/profile"
              >
                <img
                  alt="Placeholder"
                  className="block rounded-full"
                  src="https://picsum.photos/32/32/?random"
                />
                <p className="ml-2 text-sm">
                  Author Name
                </p>
              </Link>
              <p className="text-grey-darker bg-primary px-4 py-1 rounded-md text-sm">
                Badge
              </p>
            </div>
            <div className="name">
              <Link to="/services/details/1">
                <h1 className="text-xl">Services Name</h1>
              </Link>
            </div>
          </header>
          <footer className="flex items-center justify-between leading-none">
            <div className="flex items-center  text-black">
              <p className="text-sm flex gap-2">
                <FaStar /> 4.8 (741)
              </p>
            </div>
            <div className="no-underline text-grey-darker hover:text-red-dark">
              <span className="">From $10</span>
            </div>
          </footer>
        </div>
      </article>
      <div className="bookmarks absolute top-4 right-4 transition-all delay-75 text-white">
        {bookmark
          ? (
            <div
              className="bookmark cursor-pointer "
              onClick={() => setBookmark(!bookmark)}
            >
              <FaHeart size={25} />
            </div>
          )
          : (
            <div
              className="bookmark cursor-pointer text-white"
              onClick={() => setBookmark(!bookmark)}
            >
              <FaRegHeart size={25} />
            </div>
          )}
      </div>
    </div>
  );
};

export default ServiceCard;
