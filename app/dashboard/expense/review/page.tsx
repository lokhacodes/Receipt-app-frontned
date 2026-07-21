"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import ReceiptCompany from "@/components/expense/ReceiptCompany";
import ReceiptItems from "@/components/expense/ReceiptItems";
import ReceiptFooter from "@/components/expense/ReceiptFooter";
import Header from "@/components/home/Header";
import { ReceiptData } from "@/types/receipt";

export default function ReviewPage() {
  const router = useRouter();

   const [receipt, setReceipt] = useState<ReceiptData>({
  merchant: "",
  address: "",
  phone: "",
  date: "",
  time: "",
  subtotal: 0,
  tax: 0,
  total: 0,
  items: [],
  rawText: "",
});

  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("receipt");

    if (!stored) {
      router.push("/scan");
      return;
    }

    setReceipt(JSON.parse(stored));
  }, [router]);

  const saveReceipt = async () => {
    if (!receipt) return;

    try {
      setSaving(true);

      const token = localStorage.getItem("accessToken");

const response = await fetch(
  "http://localhost:4001/api/receipts",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(receipt),
  }
);

      if (!response.ok) {
        throw new Error("Unable to save receipt");
      }

      localStorage.removeItem("receipt");

      alert("Receipt Saved");

      router.push("/receipts");
    } catch (error) {
      console.error(error);

      alert("Unable to save receipt");
    } finally {
      setSaving(false);
    }
  };

  if (!receipt) {
    return (
      <div className="flex h-screen items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 pb-32">
      
            {/* Dashboard Header with Back Button */}
            <Header showBackButton />
      {/* Page Header */}

      <div className="bg-blue-700 py-5 text-center text-2xl font-bold text-white">
        Review Receipt
      </div>

      {/* Receipt Card */}

      <div className="mx-auto mt-6 max-w-3xl rounded-xl bg-white shadow-lg">

        {/* Merchant */}

        <ReceiptCompany
          receipt={receipt}
          setReceipt={setReceipt}
        />

        {/* Receipt Items */}

        <div className="p-6">

          <ReceiptItems
            receipt={receipt}
            setReceipt={setReceipt}
          />

        </div>

      </div>

      {/* Footer */}

      <ReceiptFooter
        loading={saving}
        onRetake={() => router.push("/dashboard")}
        onCancel={() => {
          localStorage.removeItem("receipt");
          router.push("/dashboard");
        }}
        onSubmit={saveReceipt}
      />

    </div>
  );
}