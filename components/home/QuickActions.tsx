"use client";

import { Camera, Plus } from "lucide-react";

import QuickActionCard from "./QuickActionCard";

interface QuickActionsProps {
  onScanReceipt: () => void;
}

import { useRouter } from "next/navigation";
export default function QuickActions({
  onScanReceipt,
}: QuickActionsProps) {
  const router = useRouter();

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
        onClick={() => router.push("/dashboard/expense/create-expense")}
      />

    </section>
  );
}