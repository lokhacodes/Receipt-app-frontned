"use client";

import { ReceiptData } from "@/types/receipt";

interface Props {
  receipt: ReceiptData;
  setReceipt: React.Dispatch<React.SetStateAction<ReceiptData>>;
}

export default function ReceiptCompany({
  receipt,
  setReceipt,
}: Props) {
  return (
    <div className="bg-white border-b">

      <div className="py-8 text-center">

        {/* Merchant */}

        <input
          value={receipt.merchant}
          onChange={(e) =>
            setReceipt({
              ...receipt,
              merchant: e.target.value,
            })
          }
          className="w-full text-center text-3xl font-bold text-blue-700 outline-none"
        />

        {/* Address */}

        <input
          value={receipt.address}
          onChange={(e) =>
            setReceipt({
              ...receipt,
              address: e.target.value,
            })
          }
          placeholder="Address"
          className="mt-3 w-full text-center text-gray-700 outline-none"
        />

        {/* Phone */}

        <input
          value={receipt.phone}
          onChange={(e) =>
            setReceipt({
              ...receipt,
              phone: e.target.value,
            })
          }
          placeholder="Phone"
          className="mt-2 w-full text-center text-gray-600 outline-none"
        />

      </div>

    </div>
  );
}