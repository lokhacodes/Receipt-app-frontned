import Link from "next/link";
import {
  ChevronRight,
  ReceiptText,
} from "lucide-react";

interface Props {
  id: number;
  title: string;
  merchant: string;
  date: string;
  amount: number;
  category: string;
  report: boolean;
}

export default function ExpenseCard({
  id,
  title,
  merchant,
  date,
  amount,
  category,
  report,
}: Props) {
  return (
    <Link
      href={`/dashboard/expense/${id}`}
      className="group expense-card block"
    >
      <div className="expense-top">

        <div className="expense-left">

          <div className="expense-icon">

            <ReceiptText
              size={22}
              className="text-primary"
            />

          </div>

          <div>

            <h3 className="expense-title">
              {title}
            </h3>

            <p className="expense-merchant">
              {merchant}
            </p>

            <p className="expense-date">
              {date}
            </p>

          </div>

        </div>

        <p className="expense-amount">
          {amount.toFixed(2)} BDT
        </p>

      </div>

      <div className="expense-bottom">

        <div className="expense-tags">

          <span className="expense-tag-food">
            {category}
          </span>

          {report && (
            <span className="expense-tag-report">
              In Report
            </span>
          )}

        </div>

        <ChevronRight
          size={20}
          className="expense-arrow"
        />

      </div>

    </Link>
  );
}