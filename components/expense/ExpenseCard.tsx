"use client";

import { useRouter } from "next/navigation";
import { Expense } from "@/types/expense";

interface Props {
  expense: Expense;
}

export default function ExpenseCard({
  expense,
}: Props) {
  const router = useRouter();

  return (
    <article
      onClick={() =>
        router.push(`/dashboard/expense/${expense.id}`)
      }
      className="expense-card"
    >
      <div className="expense-card-top">

        <div>

          <h3 className="expense-card-title">
            {expense.expense}
          </h3>

          <p className="expense-card-category">
            {expense.merchant}
          </p>

        </div>

        <span className="expense-card-amount">
          {expense.currency} {expense.amount}
        </span>

      </div>

      <div className="expense-card-bottom">

        <span className="expense-card-date">
          {expense.date}
        </span>

        {expense.inReport && (
          <span className="expense-report-badge">
            In Report
          </span>
        )}

      </div>
    </article>
  );
}