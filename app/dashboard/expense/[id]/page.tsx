"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import ExpenseDetail from "@/components/expense/ExpenseDetail";
import { getExpense } from "@/lib/expenseApi";
import type { Expense } from "@/types/expense";

export default function ExpenseDetailPage() {
  const params = useParams();

  const [expense, setExpense] =
    useState<Expense | null>(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  useEffect(() => {
    async function loadExpense() {
      try {
        const response = await getExpense(
          params.id as string
        );

        if (response.success) {
          setExpense(response.data);
        } else {
          setError(
            response.message ||
              "Failed to load expense."
          );
        }
      } catch {
        setError("Something went wrong.");
      } finally {
        setLoading(false);
      }
    }

    loadExpense();
  }, [params.id]);

  if (loading) {
    return (
      <main className="expense-detail-page">
        Loading...
      </main>
    );
  }

  if (error || !expense) {
    return (
      <main className="expense-detail-page">
        <p>{error || "Expense not found."}</p>
      </main>
    );
  }

  return (
    <main className="expense-detail-page">
      <div className="expense-detail-container">
        <ExpenseDetail expense={expense} />
      </div>
    </main>
  );
}