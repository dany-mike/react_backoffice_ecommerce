export default function SubmitButton({ value, classNameValue }) {
  return (
    <input
      type="submit"
      value={value}
      className={classNameValue}
    />
  );
}
