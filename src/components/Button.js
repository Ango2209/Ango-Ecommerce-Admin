const Button = ({ btnText }) => {
  return (
    <button
      className="border-0 px-3 py-2 text-while fw-bold w-100"
      type="submit"
      style={{ background: "#ffd333" }}
    >
      {btnText}
    </button>
  );
};
export default Button;
