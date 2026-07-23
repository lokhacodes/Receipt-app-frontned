"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import CategorySelector from "./CategorySelector";
import CurrencySelect from "./CurrencySelect";
import { createExpense, updateExpense } from "@/lib/expenseApi";
import type { Expense } from "@/types/expense";

interface ExpenseFormProps {
  type: "Create" | "Update";
  expense?: Expense;
  expenseId?: string;
}

export default function ExpenseForm({ type, expense, expenseId }: ExpenseFormProps) {
  const router = useRouter();

  const [expenseName, setExpenseName] = useState(expense?.expense ?? "");
  const [merchant, setMerchant] = useState(expense?.merchant ?? "");
  const [address, setAddress] = useState(expense?.address ?? "");

  const [amount, setAmount] = useState(expense?.amount ? String(expense.amount) : "");
  const [currency, setCurrency] = useState(expense?.currency ?? "USD");

  const [date, setDate] = useState(expense?.date ?? "");
  const [quantity, setQuantity] = useState(expense?.quantity ? String(expense.quantity) : "1");

  const [category, setCategory] = useState(expense?.category ?? "");

  const [description, setDescription] = useState(expense?.description ?? "");
  const [notes, setNotes] = useState(expense?.notes ?? "");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const payload = {
      expense: expenseName,
      merchant,
      address,
      amount: Number(amount),
      currency,
      quantity: Number(quantity),
      category,
      description,
      notes,
      expense_date: date,
      in_report: expense?.inReport ?? false,
    };

    let response;

    if (type === "Create") {
      response = await createExpense(payload);
    } else {
      response = await updateExpense(expenseId!, payload);
    }

    if (response.success) {
      router.push("/dashboard/expense");
    } else {
      alert(response.message);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="expense-form">

      <div className="expense-field">
        <label htmlFor="expense" className="expense-label">
          Expense <span className="expense-required">*</span>
        </label>

        <input
          id="expense"
          name="expense"
          type="text"
          placeholder="Expense name"
          className="expense-input"
          value={expenseName}
          onChange={(e) => setExpenseName(e.target.value)}
        />
      </div>

      <div className="expense-field">
        <label htmlFor="merchant" className="expense-label">
          Merchant <span className="expense-required">*</span>
        </label>

        <input
          id="merchant"
          name="merchant"
          type="text"
          placeholder="Merchant name"
          className="expense-input"
          value={merchant}
          onChange={(e) => setMerchant(e.target.value)}
        />
      </div>

      <div className="expense-field">
        <label htmlFor="address" className="expense-label">
          Address
        </label>

        <input
          id="address"
          name="address"
          type="text"
          placeholder="Address"
          className="expense-input"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>

      <div className="expense-row">
        <div className="expense-field">
          <label htmlFor="amount" className="expense-label">
            Amount <span className="expense-required">*</span>
          </label>

          <input
            id="amount"
            name="amount"
            type="number"
            placeholder="0.00"
            className="expense-input"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <div className="expense-field">
          <label className="expense-label">
            Currency <span className="expense-required">*</span>
          </label>

          <CurrencySelect
            value={currency}
            onChange={setCurrency}
          />
        </div>
      </div>

      <div className="expense-row">
        <div className="expense-field">
          <label htmlFor="expense_date" className="expense-label">
            Expense Date <span className="expense-required">*</span>
          </label>

          <input
            id="expense_date"
            name="expense_date"
            type="date"
            className="expense-input"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="expense-field">
          <label htmlFor="quantity" className="expense-label">
            Quantity <span className="expense-required">*</span>
          </label>

          <input
            id="quantity"
            name="quantity"
            type="number"
            min={1}
            className="expense-input"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
      </div>

      <div className="expense-field">
        <label className="expense-label">
          Category <span className="expense-required">*</span>
        </label>

        <CategorySelector
          value={category}
          onChange={setCategory}
        />

        {!category && (
          <p className="expense-error">
            Please select a category.
          </p>
        )}
      </div>

      <div className="expense-field">
        <label htmlFor="description" className="expense-label">
          Description
        </label>

        <textarea
          id="description"
          name="description"
          rows={3}
          className="expense-textarea"
          placeholder="Brief description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="expense-field">
        <label htmlFor="notes" className="expense-label">
          Notes
        </label>

        <textarea
          id="notes"
          name="notes"
          rows={5}
          className="expense-textarea"
          placeholder="Additional notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </div>

      <div className="expense-actions">
        <button
          type="button"
          className="expense-cancel-btn"
        >
          ✕ <span>Cancel</span>
        </button>

        <button
          type="submit"
          disabled={
            !expenseName ||
            !merchant ||
            !amount ||
            !category ||
            !date
          }
          className="expense-save-btn"
        >
          {type === "Create" ? "Save" : "Update"}
        </button>
      </div>

    </form>
  );
}