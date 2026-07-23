"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

import ExpenseForm from "@/components/expense/ExpenseForm";

export default function CreateExpensePage() {
  const router = useRouter();

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

        <ExpenseForm />

      </div>

    </main>
  );
}