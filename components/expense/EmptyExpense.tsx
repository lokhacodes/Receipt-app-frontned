"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function EmptyExpense() {
  const router = useRouter();

  return (
    <section className="expense-empty">

      <Image
        src="/images/no-expense.png"
        alt="No Expense"
        width={220}
        height={220}
        className="expense-empty-image"
      />

      <h2 className="expense-empty-title">
        No expenses Found
      </h2>

      <p className="expense-empty-subtitle">
        Try adjusting your filter
      </p>

      <button
        onClick={() => router.push("/dashboard/create-expense")}
        className="expense-empty-btn"
      >
        Add Receipt
      </button>

    </section>
  );
}