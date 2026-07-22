"use client";

import { ChevronDown } from "lucide-react";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

const currencies = [
  "USD",
  "BDT",
  "EUR",
  "GBP",
];

export default function CurrencySelect({
  value,
  onChange,
}: Props) {
  return (
    <div className="expense-currency">

      <select
        value={value}
        onChange={(e) =>
          onChange(e.target.value)
        }
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

      <ChevronDown
        size={18}
        className="expense-select-icon"
      />

    </div>
  );
}