"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ChevronRight,
  ReceiptText,
  Store,
  Tag,
  Paperclip,
} from "lucide-react";
import { getExpenses } from "@/lib/expenseApi";

export default function ExpenseCard() {
  const [expense, setExpense] = useState<any>(null);

  useEffect(() => {
    (async () => {
      const res = await getExpenses();
      if (res.success && res.data?.length > 0) {
        const e = res.data[0];
        setExpense({
          id: e.id,
          title: e.expense,
          merchant: e.merchant,
          date: new Date(e.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
          amount: Number(e.amount),
          category: e.category,
          report: e.inReport,
        });
      }
    })();
  }, []);

  if (!expense) return null;

  return (
    <Link
      href={`/dashboard/expense/${expense.id}`}
      className="group expense-card"
    >
      {/* Left Icon */}
      <div className="expense-icon">
        <ReceiptText
          size={22}
          className="text-primary"
        />
      </div>

      {/* Right Content */}
      <div className="expense-content">

        {/* Title & Amount */}
        <div className="expense-header">
          <h3 className="expense-title">
            {expense.title}
          </h3>

          <span className="expense-amount">
            {expense.amount.toFixed(2)} BDT
          </span>
        </div>

        {/* Merchant */}
        <div className="expense-merchant">
          <Store size={14} />
          <span>{expense.merchant}</span>
        </div>

        {/* Date */}
        <p className="expense-date">
          {expense.date}
        </p>

        {/* Tags + Arrow */}
        <div className="expense-bottom">

          <div className="expense-tags">

            <span className="expense-tag">
              <Tag size={12} />
              {expense.category}
            </span>

            {expense.report && (
              <span className="expense-tag-report">
                <Paperclip size={12} />
                In Report
              </span>
            )}

          </div>

          <ChevronRight
            size={18}
            className="expense-arrow"
          />

        </div>

      </div>
    </Link>
  );
}
