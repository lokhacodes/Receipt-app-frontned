"use client";

import { useState } from "react";

import Header from "@/components/home/Header";
import ExpenseSummary from "@/components/home/ExpenseSummary";
import QuickActions from "@/components/home/QuickActions";
import ReportCard from "@/components/home/ReportCard";
import ExpenseCard from "@/components/home/ExpenseCard";
import SectionTitle from "@/components/common/SectionTitle";
import ReceiptModal from "@/components/receipt/ReceiptModal";

export default function DashboardPage() {
  const [openReceipt, setOpenReceipt] = useState(false);

  return (
    <>
      <main className="home-page">

        <Header />

        <ExpenseSummary />

        <SectionTitle title="Quick Actions" />

        <QuickActions
          onScanReceipt={() => setOpenReceipt(true)}
        />

        <SectionTitle
          title="Submitted Reports"
          linkText="Create +"
        />

        <ReportCard />

        <SectionTitle
          title="Recent Expenses"
          linkText="View all"
        />

        <ExpenseCard />

      </main>

      <ReceiptModal
        open={openReceipt}
        onClose={() => setOpenReceipt(false)}
      />
    </>
  );
}