"use client";

import ExpenseCard from "./ExpenseCard";
import { Expense } from "@/types/expense";

interface Props {
  expenses: Expense[];
}

export default function ExpenseList({
  expenses,
}: Props) {
  return (
    <section className="expense-list">

      {expenses.map((expense) => (

        <ExpenseCard
          key={expense.id}
          expense={expense}
        />

      ))}

    </section>
  );
}