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
      <span className="py-2 px-3">{children}</span>
    </button>
  );
}
