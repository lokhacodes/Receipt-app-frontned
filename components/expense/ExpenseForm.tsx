"use client";

import { useState } from "react";

import CategorySelector from "./CategorySelector";
import CurrencySelect from "./CurrencySelect";

export default function ExpenseForm() {
  const [expense, setExpense] = useState("");
  const [merchant, setMerchant] = useState("");
  const [address, setAddress] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("BDT");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");

  function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    console.log({
      expense,
      merchant,
      address,
      category,
      amount,
      currency,
      date,
      notes,
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="expense-form"
    >
      <div className="expense-field">
        <label className="expense-label">
          Expense Name
        </label>

        <input
          className="expense-input"
          value={expense}
          onChange={(e) =>
            setExpense(e.target.value)
          }
        />
      </div>

      <div className="expense-field">
        <label className="expense-label">
          Merchant
        </label>

        <input
          className="expense-input"
          value={merchant}
          onChange={(e) =>
            setMerchant(e.target.value)
          }
        />
      </div>

      <div className="expense-field">
        <label className="expense-label">
          Address
        </label>

        <input
          className="expense-input"
          value={address}
          onChange={(e) =>
            setAddress(e.target.value)
          }
        />
      </div>

      <div className="expense-field">
        <label className="expense-label">
          Category
        </label>

        <CategorySelector
          value={category}
          onChange={setCategory}
        />
      </div>

      <div className="expense-row">

        <div className="expense-field">

          <label className="expense-label">
            Amount
          </label>

          <input
            type="number"
            className="expense-input"
            value={amount}
            onChange={(e) =>
              setAmount(e.target.value)
            }
          />

        </div>

        <div className="expense-field">

          <label className="expense-label">
            Currency
          </label>

          <CurrencySelect
            value={currency}
            onChange={setCurrency}
          />

        </div>

      </div>

      <div className="expense-field">

        <label className="expense-label">
          Date
        </label>

        <input
          type="date"
          className="expense-input"
          value={date}
          onChange={(e) =>
            setDate(e.target.value)
          }
        />

      </div>

      <div className="expense-field">

        <label className="expense-label">
          Notes
        </label>

        <textarea
          className="expense-textarea"
          value={notes}
          onChange={(e) =>
            setNotes(e.target.value)
          }
        />

      </div>

      <button className="expense-save-btn">
        Save Expense
      </button>

    </form>
  );
}