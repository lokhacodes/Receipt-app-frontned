"use client";

import { useEffect, useState } from "react";
import { Bell, Plus, SlidersHorizontal } from "lucide-react";
import { useRouter } from "next/navigation";

import ReportCard from "@/components/report/ReportCard";
import EmptyReport from "@/components/report/EmptyReport";

import { getReports } from "@/lib/reportApi";

import type { Report } from "@/types/report";

export default function ReportsPage() {
  const router = useRouter();

  const [reports, setReports] = useState<Report[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadReports();
  }, []);

  async function loadReports() {
    const res = await getReports();

    if (res.success) {
      setReports(res.data);
    }

    setLoading(false);
  }

  return (
    <main className="report-page">

      {/* Header */}

      <div className="report-header">

        <div>

          <h1 className="report-title">
            Reports
          </h1>

          <p className="report-subtitle">
            Manage your expense reports
          </p>

        </div>

        <div className="report-header-actions">

          <button
            onClick={() =>
              router.push("/dashboard/reports/create")
            }
            className="report-add-btn"
          >
            <Plus size={20} />
            Create
          </button>

          <button className="report-notification-btn">
            <Bell size={20} />
          </button>

        </div>

      </div>

      {/* Filter */}

      <div className="report-filter">

        <button className="report-filter-btn">

          <SlidersHorizontal size={18} />

          Advanced Filter

        </button>

      </div>

      {/* Tabs */}

      <div className="report-tabs">

        <button className="report-tab active">
          All
        </button>

        <button className="report-tab">
          Active
        </button>

        <button className="report-tab">
          Completed
        </button>

      </div>

      {/* List */}

      {loading ? (
        <p className="report-loading">
          Loading...
        </p>
      ) : reports.length === 0 ? (
        <EmptyReport />
      ) : (
        <section className="report-list">

          {reports.map((report) => (

            <ReportCard
              key={report.id}
              report={report}
              onClick={() =>
                router.push(
                  `/dashboard/reports/${report.id}`
                )
              }
            />

          ))}

        </section>
      )}

    </main>
  );
}