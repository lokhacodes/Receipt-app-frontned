import Link from "next/link";
import {
  ChevronRight,
  FileText,
} from "lucide-react";

interface Props {
  id: number;
  title: string;
  date: string;
  amount: number;
  expenses: number;
  status: string;
}

export default function ReportCard({
  id,
  title,
  date,
  amount,
  expenses,
  status,
}: Props) {
  return (
    <Link
      href={`/dashboard/reports/${id}`}
      className="group report-card block"
    >
      <div className="report-top">

        <div className="report-left">

          <div className="report-icon">
            <FileText
              size={22}
              className="text-yellow-600"
            />
          </div>

          <div>

            <h3 className="report-title">
              {title}
            </h3>

            <p className="report-date">
              {date}
            </p>

          </div>

        </div>

        <p className="report-amount">
          {amount.toFixed(2)} BDT
        </p>

      </div>

      <div className="report-bottom">

        <div className="report-tags">

          <span className="report-tag">
            {status}
          </span>

          <span className="report-expense-count">
            {expenses} expense(s)
          </span>

        </div>

        <ChevronRight
          size={20}
          className="report-arrow"
        />

      </div>
    </Link>
  );
}