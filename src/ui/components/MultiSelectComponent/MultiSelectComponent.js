import { MultiSelect } from "react-multi-select-component";

export default function MultiSelectComponent({
  options,
  selected,
  setSelected,
  label,
}) {
  return (
    <div>
      <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 mt-2">
        {label}
      </p>
      <MultiSelect
        options={options ? options : []}
        value={selected}
        onChange={setSelected}
        labelledBy="Select"
      />
    </div>
  );
}
