"use client";

import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Edit,
  Trash2,
  Building2,
  MapPin,
  Calendar,
  Tag,
  StickyNote,
  Hash,
} from "lucide-react";

import type { Expense } from "@/types/expense";
import { deleteExpense } from "@/lib/expenseApi";

interface ExpenseDetailProps {
  expense: Expense;
}

export default function ExpenseDetail({
  expense,
}: ExpenseDetailProps) {
  const router = useRouter();

  async function handleDelete() {
  const confirmed = window.confirm(
    "Are you sure you want to delete this expense?"
  );

  if (!confirmed) return;

  const response = await deleteExpense(expense.id);

  if (response.success) {
    router.push("/dashboard/expense");
    router.refresh();
  } else {
    alert(response.message);
  }
}

  return (
    <>
      {/* Header */}

      <header className="expense-detail-header">

        <button
          onClick={() => router.back()}
          className="expense-detail-back"
        >
          <ArrowLeft size={24} />
        </button>

        <h1 className="expense-detail-title">
          Expense Details
        </h1>

        <div className="expense-detail-actions">

         <button
  onClick={() =>
    router.push(
      `/dashboard/expense/${expense.id}/edit`
    )
  }
  className="expense-detail-icon-btn"
  title="Edit Expense"
>
  <Edit size={22} />
</button>

          <button
  onClick={handleDelete}
  className="expense-detail-icon-btn delete"
  title="Delete Expense"
>
  <Trash2 size={22} />
</button>

        </div>

      </header>

      {/* Card */}

      <section className="expense-detail-card">

        <h2 className="expense-detail-name">
          {expense.expense}
        </h2>

        <div className="expense-detail-meta">

          <div className="expense-detail-row">

            <Building2 size={18} />

            <span>{expense.merchant}</span>

          </div>

          <div className="expense-detail-row">

            <MapPin size={18} />

            <span>{expense.address || "No address"}</span>

          </div>

        </div>

        <div className="expense-detail-category">
          {expense.category}
        </div>

        {/* Amount */}

        <div className="expense-detail-amount-box">

          <span className="expense-detail-amount-label">
            Amount
          </span>

          <h3 className="expense-detail-amount">
            {expense.amount.toFixed(2)}
            <span className="expense-detail-currency">
              {" "}
              {expense.currency}
            </span>
          </h3>

        </div>

        {/* Information */}

        <div className="expense-detail-info">

          <div className="expense-detail-item">

            <div className="expense-detail-item-icon">
            <Calendar size={20} />
            </div>

            <div>

              <p className="expense-detail-item-label">
                Date
              </p>

              <p className="expense-detail-item-value">
                {new Date(expense.date).toLocaleString("en-US", {
                 dateStyle: "medium",
                 })}
              </p>

            </div>

          </div>

          <div className="expense-detail-item">

            <div className="expense-detail-item-icon">
             
             <Hash size={20}
              
            />
            </div>

            <div>

              <p className="expense-detail-item-label">
                Quantity
              </p>

              <p className="expense-detail-item-value">
                {expense.quantity}
              </p>

            </div>

          </div>

          <div className="expense-detail-item">

           <div className="expense-detail-item-icon">
            <Tag
              size={20}
              
            />
            </div>

            <div>

              <p className="expense-detail-item-label">
                Currency
              </p>

              <p className="expense-detail-item-value">
                {expense.currency}
              </p>

            </div>

          </div>

          <div className="expense-detail-item">

            <div className="expense-detail-item-icon">
            <StickyNote
              size={20}
             
            />
            </div>

            <div>

              <p className="expense-detail-item-label">
                Notes
              </p>

              <p className="expense-detail-item-value">
                {expense.notes || "No notes"}
              </p>

            </div>

          </div>

        </div>

      </section>
    </>
  );
}