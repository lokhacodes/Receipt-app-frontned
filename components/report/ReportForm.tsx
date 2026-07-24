"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { createReport } from "@/lib/reportApi";
import { getExpenses } from "@/lib/expenseApi";

import ExpenseSelector from "./ExpenseSelector";
import CurrencySelect from "../expense/CurrencySelect";

import { ReportExpense } from "@/types/report";

interface ReportFormProps {
  type: "Create" | "Update";
  report?: any;
  reportId?: string;
}

export default function ReportForm({
  type,
}: ReportFormProps) {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] =
    useState("");

  const [baseCurrency, setBaseCurrency] =
    useState("USD");

  const [expenses, setExpenses] = useState<
    ReportExpense[]
  >([]);

  const [selectedExpenses, setSelectedExpenses] =
    useState<string[]>([]);

  useEffect(() => {
    loadExpenses();
  }, []);

  async function loadExpenses() {
    const res = await getExpenses();

    if (res.success) {
      setExpenses(res.data);
    }
  }

  function toggleExpense(id: string) {
    setSelectedExpenses((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  }

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    const payload = {
      title,
      description,
      baseCurrency,
      expenseIds: selectedExpenses,
    };

    const response =
      type === "Create"
        ? await createReport(payload)
        : null;

    if (response?.success) {
      router.push("/dashboard/reports");
    } else {
      alert(response?.message);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="report-form"
    >
      {/* Report Name */}

      <div className="report-field">

        <label className="report-label">
          Report Name
        </label>

        <input
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
          placeholder="Business Trip"
          className="report-input"
        />

      </div>

      {/* Description */}

      <div className="report-field">

        <label className="report-label">
          Description
        </label>

        <textarea
          rows={4}
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
          placeholder="Optional description..."
          className="report-textarea"
        />

      </div>

      {/* Currency */}

      <div className="report-field">

        <label className="report-label">
          Base Currency
        </label>

        <CurrencySelect
          value={baseCurrency}
          onChange={setBaseCurrency}
        />

      </div>

      {/* Expense List */}

      <div className="report-field">

        <label className="report-label">
          Select Expenses
        </label>

        <ExpenseSelector
          expenses={expenses}
          selectedExpenses={selectedExpenses}
          onToggle={toggleExpense}
        />

      </div>

      <div className="report-selected-count">
        Selected Expenses:{" "}
        {selectedExpenses.length}
      </div>

      <button
        type="submit"
        disabled={
          !title ||
          selectedExpenses.length === 0
        }
        className="report-submit-btn"
      >
        {type === "Create"
          ? "Create Report"
          : "Update Report"}
      </button>
    </form>
  );
}