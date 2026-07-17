"use client";

import { Trash2 } from "lucide-react";

export interface ReceiptItem {
  id: number;
  name: string;
  quantity: number;
  price: number;
}

interface ReceiptRowProps {
  item: ReceiptItem;
  onDelete: (id: number) => void;
  onUpdate: (
    id: number,
    field: keyof ReceiptItem,
    value: string | number
  ) => void;
}

export default function ReceiptRow({
  item,
  onDelete,
  onUpdate,
}: ReceiptRowProps) {
  return (
    <div className="receipt-row">

      <input
        className="receipt-name"
        value={item.name}
        onChange={(e) =>
          onUpdate(item.id, "name", e.target.value)
        }
      />

      <input
        type="number"
        className="receipt-qty"
        value={item.quantity}
        onChange={(e) =>
          onUpdate(
            item.id,
            "quantity",
            Number(e.target.value)
          )
        }
      />

      <input
        type="number"
        className="receipt-price"
        value={item.price}
        onChange={(e) =>
          onUpdate(
            item.id,
            "price",
            Number(e.target.value)
          )
        }
      />

      <button
        className="receipt-delete-btn"
        onClick={() => onDelete(item.id)}
      >
        <Trash2 size={18} />
      </button>

    </div>
  );
}