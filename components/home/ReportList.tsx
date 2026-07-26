"use client";

import { useEffect, useState } from "react";
import ReportCard from "./ReportCard";
import { getReports } from "@/lib/reportApi";

export default function ReportList() {
  const [report, setReport] = useState<any>(null);

  useEffect(() => {
    (async () => {
      const res = await getReports();
      if (res.success && res.data?.length > 0) {
        const r = res.data[0]; // most recent
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
    <section className="report-list">
      <ReportCard {...report} />
    </section>
  );
}
