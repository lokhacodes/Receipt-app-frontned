"use client";

import { Bell, Plus } from "lucide-react";
import { useRouter } from "next/navigation";

interface Props {
  count: number;
}

export default function ExpenseHeader({
  count,
}: Props) {
  const router = useRouter();

  return (
    <header className="expense-header">

      <div className="expense-header-left">

        <h1 className="expense-title">
          Expenses
        </h1>

        <p className="expense-subtitle">
          {count} Expense(s)
        </p>

      </div>

      <div className="expense-header-right">

        <button
          onClick={() => router.push("/dashboard/create-expense")}
          className="expense-add-btn"
        >
          <Plus size={18} />

          Add
        </button>

        <button className="expense-notification-btn">
          <Bell size={20} />
        </button>

      </div>

    </header>
  );
}