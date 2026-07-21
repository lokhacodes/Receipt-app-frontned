"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

import ExpenseForm from "@/components/expense/ExpenseForm";

export default function CreateExpensePage() {
  const router = useRouter();

  return (
    <main className="create-expense-page">

      <section className="create-expense-container">

        <header className="create-header">

          <button
            onClick={() => router.back()}
            className="create-back"
          >
            <ArrowLeft size={22} />
          </button>

          <h1 className="create-title">
            Add Expense
          </h1>

        </header>

        <ExpenseForm />

      </section>

    </main>
  );
}