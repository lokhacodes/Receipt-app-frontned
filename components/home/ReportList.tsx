import ReportCard from "./ReportCard";

const reports = [
  {
    id: 1,
    title: "Ride",
    date: "June 29, 2026",
    amount: 520,
    expenses: 1,
    status: "Pending",
  },
];

export default function ReportList() {
  return (
    <section className="report-list">

      {reports.map((report) => (

        <ReportCard
          key={report.id}
          {...report}
        />

      ))}

    </section>
  );
}