"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ReceiptHeader() {
  const router = useRouter();

  return (
    <header className="receipt-header">

      <div className="receipt-header-left">

        <button
          className="receipt-back"
          onClick={() => router.back()}
        >
          <ArrowLeft size={20} />
        </button>

        <h1 className="receipt-page-title">
          Review Receipt
        </h1>

      </div>

    </header>
  );
}