"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ChevronRight,
  FileText,
} from "lucide-react";
import { getReports } from "@/lib/reportApi";

export default function ReportCard() {
  const [report, setReport] = useState<any>(null);

  useEffect(() => {
    (async () => {
      const res = await getReports();
      if (res.success && res.data?.length > 0) {
        const r = res.data[0];
        setReport({
          id: r.id,
          title: r.title,
          date: new Date(r.created_at).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
          amount: Number(r.total_amount),
          expenses: Number(r.expense_count),
          status:
            r.status === "active"
              ? "Pending"
              : r.status === "draft"
                ? "Draft"
                : "Completed",
        });
      }
    })();
  }, []);

  if (!report) return null;

  return (
    <Link
      href={`/dashboard/reports/${report.id}`}
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
              {report.title}
            </h3>

            <p className="report-date">
              {report.date}
            </p>

          </div>

        </div>

        <p className="report-amount">
          {report.amount.toFixed(2)} BDT
        </p>

      </div>

      <div className="report-bottom">

        <div className="report-tags">

          <span className="report-tag">
            {report.status}
          </span>

          <span className="report-expense-count">
            {report.expenses} expense(s)
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
