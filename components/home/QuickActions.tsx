"use client";

import { Camera, Plus } from "lucide-react";

import QuickActionCard from "./QuickActionCard";

interface QuickActionsProps {
  onScanReceipt: () => void;
}

export default function QuickActions({
  onScanReceipt,
}: QuickActionsProps) {
  return (
    <section className="quick-actions">

      <QuickActionCard
        icon={Camera}
        title="Scan Receipt"
        subtitle="Take Photo"
        iconStyle="primary"
        primary
        onClick={onScanReceipt}
      />

      <QuickActionCard
        icon={Plus}
        title="New Expense"
        subtitle="Manual Entry"
        iconStyle="secondary"
        onClick={onScanReceipt}
      />

    </section>
  );
}