interface Props {
  value: string;
  onChange: (value: string) => void;
}

const categories = [
  "Food",
  "Travel",
  "Office",
  "Accommodation",
  "Transport",
  "Entertainment",
  "Other",
];

export default function CategorySelector({
  value,
  onChange,
}: Props) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="expense-select"
    >
      <option value="">Select Category</option>

      {categories.map((category) => (
        <option
          key={category}
          value={category}
        >
          {category}
        </option>
      ))}
    </select>
  );
}