"use client";

import { useState } from "react";

import CategorySelector from "./CategorySelector";
import CurrencySelect from "./CurrencySelect";
import { createExpense } from "@/lib/expenseApi";
import { useRouter } from "next/navigation";

const router = useRouter();
export default function ExpenseForm() {
  const [expense, setExpense] = useState("");
  const [merchant, setMerchant] = useState("");
  const [address, setAddress] = useState("");

  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("USD");

  const [date, setDate] = useState("");
  const [quantity, setQuantity] = useState("1");

  const [category, setCategory] = useState("");

  const [description, setDescription] =
    useState("");

  const [notes, setNotes] =
    useState("");

  async function handleSubmit(
  e: React.FormEvent
) {
  e.preventDefault();

  const response = await createExpense({
    expense,
    merchant,
    address,
    category,
    amount: Number(amount),
    currency,
    date,
    notes,
  });

  if (response.success) {
    router.push("/dashboard/expense");
  } else {
    alert(response.message);
  }
}

  return (
    <form
      onSubmit={handleSubmit}
      className="expense-form"
    >

      {/* Expense */}

      <div className="expense-field">

        <label className="expense-label">
  Expense
  <span className="expense-required">*</span>
</label>

        <input
           placeholder="Expense name"
          className="expense-input"
          value={expense}
          onChange={(e) =>
            setExpense(e.target.value)
          }
        />

      </div>

      {/* Merchant */}

      <div className="expense-field">

        <label className="expense-label">
          Merchant
    <span className="Merchant-required">*</span>
        </label>

        <input
          placeholder="Merchant name"
          className="expense-input"
          value={merchant}
          onChange={(e) =>
            setMerchant(e.target.value)
          }
        />

      </div>

      {/* Address */}

      <div className="expense-field">

        <label className="expense-label">
          Address
        </label>

        <input
          placeholder="Address"
          className="expense-input"
          value={address}
          onChange={(e) =>
            setAddress(e.target.value)
          }
        />

      </div>

      {/* Amount + Currency */}

      <div className="expense-row">

        <div className="expense-field">

          <label className="expense-label">
            Amount 
              <span className="amount-required">*</span>
          </label>

          <input
            placeholder="0.00"
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
              <span className="currency-required">*</span>
          </label>

          <CurrencySelect
            value={currency}
            onChange={setCurrency}
          />

        </div>

      </div>

      {/* Date + Quantity */}

      <div className="expense-row">

        <div className="expense-field">

          <label className="expense-label">
            Expense Date 
              <span className="expense-date-required">*</span>
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
            Quantity 
              <span className="Quantity-required">*</span>
          </label>

          <input
            placeholder="1"
            type="number"
            min={1}
            className="expense-input"
            value={quantity}
            onChange={(e) =>
              setQuantity(e.target.value)
            }
          />

        </div>

      </div>

      {/* Categories */}

      <div className="expense-field">

        <label className="expense-label">
          Categories 
            <span className="categories-required">*</span>
        </label>

        <CategorySelector
          value={category}
          onChange={setCategory}
        />

        {!category && (
          <p className="expense-error">
            Please select at least one category
          </p>
        )}

      </div>

      {/* Description */}

      <div className="expense-field">

        <label className="expense-label">
          Description
        </label>

        <textarea
          
          rows={3}
          className="expense-textarea"
          placeholder="Brief description (optional)"
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
        />

      </div>

      {/* Notes */}

      <div className="expense-field">

        <label className="expense-label">
          Notes
        </label>

        <textarea
           
          rows={5}
          className="expense-textarea"
          placeholder="Additional notes (optional)"
          value={notes}
          onChange={(e) =>
            setNotes(e.target.value)
          }
        />

      </div>
     

     <div className="expense-actions">

  <button
    type="button"
    className="expense-cancel-btn"
  >
    ✕
    <span>Cancel</span>
  </button>

  <button
    type="submit"
    disabled={
      !expense ||
      !merchant ||
      !amount ||
      !category
    }
    className="expense-save-btn"
  >
    Save
  </button>

</div>
    </form>
  );
}