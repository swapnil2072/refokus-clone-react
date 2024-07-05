import PropTypes from "prop-types";
import { IoIosReturnRight } from "react-icons/io";

const Button = ({ title = "Get Started" }) => {
  return (
    <div className="w-fit px-4 py-2 bg-zinc-100 text-black rounded-full flex items-center justify-between">
      <span className="text-sm font-medium">{title}</span>
      <IoIosReturnRight className="ml-2 text-xs" />
    </div>
  );
};

Button.propTypes = {
  title: PropTypes.string,
};

export default Button;
