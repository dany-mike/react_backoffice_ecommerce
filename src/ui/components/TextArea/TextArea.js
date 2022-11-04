export default function TextArea({
  label,
  name,
  placeholder,
  labelClass,
  textAreaClass,
  register,
}) {
  return (
    <>
      <label htmlFor={name} className={labelClass}>
        {label}
      </label>
      <textarea
        id={name}
        {...register(name, { required: false, maxLength: 1000 })}
        rows="4"
        className={textAreaClass}
        placeholder={placeholder}
      />
    </>
  );
}
