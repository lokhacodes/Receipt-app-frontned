"use client";

import { Search } from "lucide-react";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function ExpenseSearch({
  value,
  onChange,
}: Props) {
  return (
    <div className="expense-search">

      <div className="expense-search-box">

        <Search
          size={18}
          className="expense-search-icon"
        />

        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search expenses..."
          className="expense-search-input"
        />

      </div>

    </div>
  );
}