import { MultiSelect } from "react-multi-select-component";

export default function MultiSelectComponent({
  categories,
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
        options={categories ? categories : []}
        value={selected}
        onChange={setSelected}
        labelledBy="Select"
      />
    </div>
  );
}
