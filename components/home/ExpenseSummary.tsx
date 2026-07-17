import { TrendingUp } from "lucide-react";

export default function ExpenseSummary() {
  return (
    <section className="summary-card">

      <div className="summary-icon">

        <TrendingUp size={24} />

      </div>

      <h2 className="summary-amount">

        0

        <span className="summary-currency">
          BDT
        </span>

      </h2>

      <p className="summary-title">
        Total Expenses
      </p>

    </section>
  );
}