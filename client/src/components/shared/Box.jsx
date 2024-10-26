import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Box = ({ children, link, linkText, title }) => {
  return (
    <div className="president border-2 border-primary">
      <div className="bg-primary p-2">
        <h2 className="ml-6 text-2xl text-white font-bold">{title}</h2>
      </div>
      <div className="about space-y-4 p-4">
        {children}
        {link && (
          <Link to={link} className="text-primary">
            {linkText}
          </Link>
        )}
      </div>
    </div>
  );
};

export default Box;
Box.propTypes = {
  link: PropTypes.string,
  linkText: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node,
};
