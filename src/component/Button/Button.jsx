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
