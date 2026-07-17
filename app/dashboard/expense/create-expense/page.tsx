"use client";

import Header from "@/components/home/Header";
import ReceiptCompany from "@/components/expense/ReceiptCompany";
import ReceiptTable from "@/components/expense/ReceiptTable";
import ReceiptFooter from "@/components/expense/ReceiptFooter";
import { ReceiptItem } from "@/components/expense/ReceiptRow";

export default function CreateExpensePage() {
  const receipt = {
    company: "COMPANY NAME",

    address: "Road 2, Dhanmondi, Dhaka",

    phone: "+8801715000000",

    items: [
      {
        id: 1,
        name: "Caesar Salad",
        quantity: 4,
        price: 1536,
      },
      {
        id: 2,
        name: "Grilled Salmon",
        quantity: 4,
        price: 1536,
      },
      {
        id: 3,
        name: "Cheese Cake",
        quantity: 4,
        price: 1536,
      },
      {
        id: 4,
        name: "Sparkling Water",
        quantity: 4,
        price: 1536,
      },
    ] as ReceiptItem[],
  };

  return (
    <main className="receipt-page">

      {/* Dashboard Header with Back Button */}
      <Header showBackButton />

      {/* Scrollable Content */}
      <div className="receipt-content">

        <ReceiptCompany
          company={receipt.company}
          address={receipt.address}
          phone={receipt.phone}
        />

        <ReceiptTable
          items={receipt.items}
        />

      </div>

      {/* Bottom Buttons */}
      <ReceiptFooter />

    </main>
  );
}