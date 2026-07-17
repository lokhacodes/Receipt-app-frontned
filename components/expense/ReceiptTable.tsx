"use client";

import { useState } from "react";
import ReceiptRow, { ReceiptItem } from "./ReceiptRow";

interface ReceiptTableProps {
  items: ReceiptItem[];
}

export default function ReceiptTable({
  items: initialItems,
}: ReceiptTableProps) {
  const [items, setItems] = useState(initialItems);

  const updateItem = (
    id: number,
    field: keyof ReceiptItem,
    value: string | number
  ) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              [field]: value,
            }
          : item
      )
    );
  };

  const deleteItem = (id: number) => {
    setItems((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  return (
    <section className="receipt-table">
      {items.map((item) => (
        <ReceiptRow
          key={item.id}
          item={item}
          onUpdate={updateItem}
          onDelete={deleteItem}
        />
      ))}
    </section>
  );
}