export default function Button({
  children,
  handleClick,
  classNameValue,
  parameter,
}) {
  return (
    <button
      className={classNameValue}
      onClick={(event) => (handleClick ? handleClick(event, parameter) : "")}
    >
      {children}
    </button>
  );
}
