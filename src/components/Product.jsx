import PropTypes from "prop-types";
import Button from "./Button";

const Product = ({ val, mover, count }) => {
  return (
    <div
      onMouseOver={() => mover(count)}
      className="w-full mt-10 py-20 h-[23rem] text-white"
    >
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        <h1 className="text-6xl capitalize font-medium">{val.title}</h1>
        <div className="dets w-1/3">
          <p className="mb-10">{val.description}</p>
          <div className="flex items-center gap-8">
            {val.live && <Button title="Live Website" />}
            {val.caseStudy && <Button title="Case Study " />}
          </div>
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  val: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    live: PropTypes.bool,
    caseStudy: PropTypes.bool,
  }).isRequired,
};

export default Product;
