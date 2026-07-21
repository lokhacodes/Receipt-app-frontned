"use client";

import { useMemo, useState } from "react";

import ExpenseHeader from "@/components/expense/ExpenseHeader";
import ExpenseSearch from "@/components/expense/ExpenseSearch";
import ExpenseList from "@/components/expense/ExpenseList";
import EmptyExpense from "@/components/expense/EmptyExpense";
import FooterNav from "@/components/common/FooterNav";

import { Expense } from "@/types/expense";

export default function ExpensePage() {

  const [search, setSearch] = useState("");

  const expenses: Expense[] = [
    {
      id: "1",
      expense: "Business Lunch",
      merchant: "AnnaNovas Restaurant",
      address: "Dhaka",
      amount: 1250,
      currency: "৳",
      quantity: 1,
      category: "Food",
      date: "25 Jul 2026",
      description: "",
      notes: "",
      inReport: true,
    },
    {
      id: "2",
      expense: "Office Supplies",
      merchant: "Star Tech",
      address: "Dhaka",
      amount: 3500,
      currency: "৳",
      quantity: 1,
      category: "Office",
      date: "24 Jul 2026",
      description: "",
      notes: "",
      inReport: false,
    },
  ];

  const filteredExpenses = useMemo(() => {
    return expenses.filter((expense) =>
      expense.expense
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [expenses, search]);

  return (
    <main className="expense-page">

      <section className="expense-container">

        <ExpenseHeader
          count={expenses.length}
        />

        {expenses.length === 0 ? (
          <EmptyExpense />
        ) : (
          <>
            <ExpenseSearch
              value={search}
              onChange={setSearch}
            />

            <ExpenseList
              expenses={filteredExpenses}
            />
          </>
        )}

      </section>

      <FooterNav />

    </main>
  );
}