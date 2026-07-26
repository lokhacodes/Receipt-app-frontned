"use client";

import { useEffect, useState } from "react";
import ExpenseCard from "./ExpenseCard";
import { getExpenses } from "@/lib/expenseApi";

export default function ExpenseList() {
  const [expense, setExpense] = useState<any>(null);

  useEffect(() => {
    (async () => {
      const res = await getExpenses();
      if (res.success && res.data?.length > 0) {
        const e = res.data[0]; // most recent
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
    <section className="expense-list">
      <ExpenseCard {...expense} />
    </section>
  );
}
