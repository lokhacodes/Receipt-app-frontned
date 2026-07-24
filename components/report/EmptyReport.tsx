"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function EmptyReport() {
  const router = useRouter();

  return (
    <section className="report-empty">

      <Image
        src="/images/no-report.png"
        alt="No Reports"
        width={220}
        height={220}
        className="report-empty-image"
      />

      <h2 className="report-empty-title">
        No Report Found
      </h2>

      <p className="report-empty-subtitle">
        Create a report to group your expenses
      </p>

      <button
        onClick={() =>
          router.push("/dashboard/reports/create")
        }
        className="report-empty-btn"
      >
        Create Report
      </button>

    </section>
  );
}