import Link from "next/link";
import {
  ChevronRight,
  ReceiptText,
  Store,
  Tag,
  Paperclip,
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
      className="group expense-card"
    >
      {/* Left Icon */}
      <div className="expense-icon">
        <ReceiptText
          size={22}
          className="text-primary"
        />
      </div>

      {/* Right Content */}
      <div className="expense-content">

        {/* Title & Amount */}
        <div className="expense-header">
          <h3 className="expense-title">
            {title}
          </h3>

          <span className="expense-amount">
            {amount.toFixed(2)} BDT
          </span>
        </div>

        {/* Merchant */}
        <div className="expense-merchant">
          <Store size={14} />
          <span>{merchant}</span>
        </div>

        {/* Date */}
        <p className="expense-date">
          {date}
        </p>

        {/* Tags + Arrow */}
        <div className="expense-bottom">

          <div className="expense-tags">

            <span className="expense-tag">
              <Tag size={12} />
              {category}
            </span>

            {report && (
              <span className="expense-tag-report">
                <Paperclip size={12} />
                In Report
              </span>
            )}

          </div>

          <ChevronRight
            size={18}
            className="expense-arrow"
          />

        </div>

      </div>
    </Link>
  );
}