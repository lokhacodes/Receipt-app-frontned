"use client";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

const categories = [
  "Meals",
  "Others",
  "Food",
  "Drink",
  "Groceries",
  "Transportation",
];

export default function CategorySelector({
  value,
  onChange,
}: Props) {
  return (
    <div className="expense-category-grid">
      {categories.map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => onChange(item)}
          className={`expense-category ${
            value === item
              ? "expense-category-active"
              : ""
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}