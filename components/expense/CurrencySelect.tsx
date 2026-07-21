interface Props {
  value: string;
  onChange: (value: string) => void;
}

const currencies = [
  "BDT",
  "USD",
  "EUR",
  "GBP",
];

export default function CurrencySelect({
  value,
  onChange,
}: Props) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="expense-select"
    >
      {currencies.map((currency) => (
        <option
          key={currency}
          value={currency}
        >
          {currency}
        </option>
      ))}
    </select>
  );
}