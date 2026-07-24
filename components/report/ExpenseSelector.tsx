"use client";

import { Check } from "lucide-react";

import { ReportExpense } from "@/types/report";

interface ExpenseSelectorProps {
  expenses: ReportExpense[];
  selectedExpenses: string[];
  onToggle: (id: string) => void;
}

export default function ExpenseSelector({
  expenses,
  selectedExpenses,
  onToggle,
}: ExpenseSelectorProps) {
  if (expenses.length === 0) {
    return (
      <div className="report-no-expenses">
        No expenses available.
      </div>
    );
  }

  return (
    <div className="report-expense-list">

      {expenses.map((expense) => {

        const selected = selectedExpenses.includes(
          expense.id
        );

        return (

          <button
            key={expense.id}
            type="button"
            onClick={() => onToggle(expense.id)}
            className={`report-expense-card ${
              selected
                ? "report-expense-card-active"
                : ""
            }`}
          >

            {/* Checkbox */}

            <div
              className={`report-checkbox ${
                selected
                  ? "report-checkbox-active"
                  : ""
              }`}
            >
              {selected && <Check size={15} />}
            </div>

            {/* Content */}

            <div className="report-expense-content">

              <div className="report-expense-top">

                <h3 className="report-expense-title">
                  {expense.expense}
                </h3>

                <span className="report-expense-amount">
                  {Number(expense.amount).toFixed(2)}{" "}
                  {expense.currency}
                </span>

              </div>

              <p className="report-expense-merchant">
                {expense.merchant}
              </p>

              <div className="report-expense-bottom">

                <span className="report-expense-category">
                  {expense.category}
                </span>

                <span className="report-expense-date">
                  {new Date(
                    expense.expense_date
                  ).toLocaleDateString()}
                </span>

              </div>

            </div>

          </button>

        );
      })}

    </div>
  );
}