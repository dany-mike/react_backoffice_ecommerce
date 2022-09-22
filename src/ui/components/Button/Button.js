export default function Button({ children, handleClick, classNameValue }) {
  return (
    <div className={classNameValue} onClick={handleClick}>
      {children}
    </div>
  );
}
