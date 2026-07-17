"use client";

import { useRouter } from "next/navigation";

export default function ReceiptFooter() {
  const router = useRouter();

  const handleRetake = () => {
    router.push("/dashboard");
  };

  const handleCancel = () => {
    sessionStorage.removeItem("receiptImage");
    sessionStorage.removeItem("receiptData");
    router.push("/dashboard");
  };

  const handleSubmit = () => {
    // Later:
    // POST /api/expenses

    alert("Expense Submitted Successfully!");
    router.push("/dashboard/expense");
  };

  return (
    <footer className="receipt-footer">

      <button
        className="receipt-btn receipt-btn-secondary"
        onClick={handleRetake}
      >
        Re-Take
      </button>

      <button
        className="receipt-btn receipt-btn-primary"
        onClick={handleSubmit}
      >
        Submit
      </button>

      <button
        className="receipt-btn receipt-btn-danger"
        onClick={handleCancel}
      >
        Cancel
      </button>

    </footer>
  );
}