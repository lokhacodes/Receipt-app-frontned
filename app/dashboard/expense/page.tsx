"use client";

import { useEffect, useMemo, useState } from "react";

import ExpenseHeader from "@/components/expense/ExpenseHeader";
import ExpenseSearch from "@/components/expense/ExpenseSearch";
import ExpenseList from "@/components/expense/ExpenseList";
import EmptyExpense from "@/components/expense/EmptyExpense";
import FooterNav from "@/components/common/FooterNav";

import { Expense } from "@/types/expense";

import { getExpenses } from "@/lib/expenseApi";

export default function ExpensePage() {

  const [expenses, setExpenses] = useState<Expense[]>([]);

  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  useEffect(() => {

    async function loadExpenses() {

      try {

        const response = await getExpenses();

        if (response.success) {
          setExpenses(response.data);
        }

      } catch (error) {

        console.error(error);

      } finally {

        setLoading(false);

      }

    }

    loadExpenses();

  }, []);

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

        {loading ? (

          <p>Loading...</p>

        ) : expenses.length === 0 ? (

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