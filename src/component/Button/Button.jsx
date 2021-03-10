import PropTypes from 'prop-types';
const Button = ({ onLoadMoreImg }) => {
  return (
    <button
      className="Button"
      onClick={() => {
        onLoadMoreImg();
      }}
    >
      Load more
    </button>
  );
};

export default Button;

Button.propTypes = {
  onLoadMoreImg: PropTypes.func.isRequired,
};
