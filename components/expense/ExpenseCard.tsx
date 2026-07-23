"use client";

import {
  Building2,
  ChevronRight,
  FileText,
  Tag,
} from "lucide-react";

import type { Expense } from "@/types/expense";
import { useRouter } from "next/navigation";

interface ExpenseCardProps {
  expense: Expense;
}

export default function ExpenseCard({
  expense,
}: ExpenseCardProps) {
  const router = useRouter();
  return (
    <div
  className="expense-card"
  onClick={() =>
    router.push(`/dashboard/expense/${expense.id}`)
  }
>

      <div className="expense-card-left">

        <div className="expense-card-icon">
          <FileText size={28} />
        </div>

        <div className="expense-card-content">

          <div className="expense-card-top">

            <h3 className="expense-card-title">
              {expense.expense}
            </h3>

            <span className="expense-card-amount">
              {expense.amount.toFixed(2)} {expense.currency}
            </span>

          </div>

          <div className="expense-card-merchant">

            <Building2 size={16} />

            <span>{expense.merchant}</span>

          </div>

          <p className="expense-card-date">
            {expense.date}
          </p>

          <div className="expense-card-tags">

            <span className="expense-tag">

              <Tag size={14} />

              {expense.category}

            </span>

            {expense.inReport && (

              <span className="expense-tag report">

                <Tag size={14} />

                In Report

              </span>

            )}

          </div>

        </div>

      </div>

      <ChevronRight
        size={22}
        className="expense-arrow"
      />

    </div>
  );
}