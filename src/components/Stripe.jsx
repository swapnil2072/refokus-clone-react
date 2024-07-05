import PropTypes from "prop-types";

const Stripe = ({ val }) => {
  return (
    <div className="w-[16.66%] px-5 py-5 border-t-[1.25px] border-b-[1.25px] border-r-[1.25px] border-zinc-600 flex  items-center justify-between">
      <img src={val.URL} alt="" />
      <span className="font-semibold">{val.number}</span>
    </div>
  );
};

Stripe.propTypes = {
  val: PropTypes.shape({
    URL: PropTypes.string.isRequired,
    number: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      .isRequired,
  }).isRequired,
};

export default Stripe;
