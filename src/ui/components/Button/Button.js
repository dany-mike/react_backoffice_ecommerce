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
      <span className="p-2">{children}</span>
    </button>
  );
}
