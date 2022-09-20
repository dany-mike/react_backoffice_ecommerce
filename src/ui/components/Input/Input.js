export default function Input({
  inputLabel,
  type,
  name,
  register,
  required,
  minLengthValue,
  minLengthMessage,
  maxLengthValue,
  maxLengthMessage,
  patternValue,
  patternMessage,
}) {
  return (
    <div className="mb-6">
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {inputLabel}
      </label>
      <input
        {...register(name, {
          required,
          minLength: {
            value: minLengthValue,
            message: minLengthMessage,
          },
          maxLength: {
            value: maxLengthValue,
            message: maxLengthMessage,
          },
          pattern: {
            value: patternValue,
            message: patternMessage,
          },
        })}
        type={type}
        name={name}
        id={name}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </div>
  );
}
