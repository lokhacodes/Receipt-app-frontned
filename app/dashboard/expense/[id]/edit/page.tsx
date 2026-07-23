"use client";

import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useRouter, useParams } from "next/navigation";

import ExpenseForm from "@/components/expense/ExpenseForm";
import { getExpense } from "@/lib/expenseApi";
import type { Expense } from "@/types/expense";

export default function EditExpensePage() {
  const router = useRouter();
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
      <main className="create-expense-page">
        <div className="create-expense-container">
          Loading...
        </div>
      </main>
    );
  }

  if (error || !expense) {
    return (
      <main className="create-expense-page">
        <div className="create-expense-container">
          <p>{error || "Expense not found."}</p>
        </div>
      </main>
    );
  }

  return (
    <main className="create-expense-page">

      <div className="create-expense-container">

        <header className="create-header">

          <button
            type="button"
            onClick={() => router.back()}
            className="create-back"
          >
            <ArrowLeft size={24} />
          </button>

          <h1 className="create-title">
            Update Expense
          </h1>

        </header>

        <ExpenseForm
          type="Update"
          expense={expense}
          expenseId={expense.id}
        />

      </div>

    </main>
  );
}
