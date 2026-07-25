"use client";

import {
  ChevronRight,
  FileText,
  CalendarDays,
  Receipt,
} from "lucide-react";

import type { Report } from "../../types/report";

interface ReportCardProps {
  report: Report;
  onClick?: () => void;
}

export default function ReportCard({
  report,
  onClick,
}: ReportCardProps) {
  return (
    <button
      onClick={onClick}
      className="report-card"
    >
      <div className="report-card-left">

        <div className="report-card-icon">
          <FileText size={24} />
        </div>

        <div className="report-card-content">

          <div className="report-card-top">

            <h3 className="report-card-title">
              {report.title}
            </h3>

            

            <span className="report-card-amount">
              {report.totalAmount.toFixed(2)}{" "}
              {report.baseCurrency}
            </span>

          </div>
           
           <div  className="report-card-date">
            <p >
            {new Date(
              report.createdAt
            ).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
           </div>
          

          <div className="report-card-footer">

            <span
              className={`report-status ${
                report.status.toLowerCase()
              }`}
            >
              {report.status}
            </span>

            <span className="report-expense-count">
              <Receipt size={15} />
              {report.expenseCount} Expense(s)
            </span>

          </div>

        </div>

      </div>

      <ChevronRight
        size={22}
        className="report-card-arrow"
      />
    </button>
  );
}