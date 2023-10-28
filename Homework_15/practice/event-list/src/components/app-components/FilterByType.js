export const FilterByType = ({ types, selectedType, onTypeChange }) => {
  return (
    <select className="mb-5 form-select w-25" value={selectedType} onChange={(e) => onTypeChange(e.target.value)}>
      <option value={""}>All</option>
      {types.map((type) => (
        <option key={type} value={type}>
          {type}
        </option>
      ))}
    </select>
  );
};