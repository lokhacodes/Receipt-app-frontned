"use client";

import { useState } from "react";

import Header from "@/components/home/Header";
import ExpenseSummary from "@/components/home/ExpenseSummary";
import QuickActions from "@/components/home/QuickActions";
import ReportList from "@/components/home/ReportList";
import ExpenseList from "@/components/home/ExpenseList";
import SectionTitle from "@/components/common/SectionTitle";
import ReceiptModal from "@/components/expense/ReceiptModal";

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

        <ReportList />

        <SectionTitle
          title="Recent Expenses"
          linkText="View all"
        />

        <ExpenseList />

      </main>

      <ReceiptModal
        open={openReceipt}
        onClose={() => setOpenReceipt(false)}
      />
    </>
  );
}