"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

import ReportForm from "@/components/report/ReportForm";

export default function CreateReportPage() {
  const router = useRouter();

  return (
    <main className="create-report-page">

      <div className="create-report-container">

        <header className="create-report-header">

          <button
            type="button"
            onClick={() => router.back()}
            className="create-report-back"
          >
            <ArrowLeft size={24} />
          </button>

          <h1 className="create-report-title">
            Create Report
          </h1>

        </header>

        <ReportForm type="Create" />

      </div>

    </main>
  );
}