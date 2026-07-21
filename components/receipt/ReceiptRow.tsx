"use client";

import { ReceiptItem } from "@/types/receipt";

interface Props {
  item: ReceiptItem;
  index: number;
  updateItem: (
    index: number,
    field: keyof ReceiptItem,
    value: string | number
  ) => void;
  deleteItem: (index: number) => void;
}

export default function ReceiptItemRow({
  item,
  index,
  updateItem,
  deleteItem,
}: Props) {
  return (
    <div className="flex items-center gap-3 rounded-lg bg-white p-3 shadow-sm">

      {/* Item Name */}

      <input
        type="text"
        value={item.name}
        onChange={(e) =>
          updateItem(index, "name", e.target.value)
        }
        placeholder="Item Name"
        className="flex-1 rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-blue-500"
      />

      {/* Quantity */}

      <input
        type="number"
        min={1}
        value={item.quantity}
        onChange={(e) =>
          updateItem(
            index,
            "quantity",
            Number(e.target.value)
          )
        }
        className="w-16 rounded-md border border-gray-300 px-2 py-2 text-center outline-none focus:border-blue-500"
      />

      {/* Price */}

      <input
        type="number"
        step="0.01"
        min={0}
        value={item.price}
        onChange={(e) =>
          updateItem(
            index,
            "price",
            Number(e.target.value)
          )
        }
        className="w-24 rounded-md border border-gray-300 px-2 py-2 text-center outline-none focus:border-blue-500"
      />

      {/* Delete */}

      <button
        onClick={() => deleteItem(index)}
        className="flex h-10 w-10 items-center justify-center rounded-md bg-red-500 text-white transition hover:bg-red-600"
      >
        🗑
      </button>

    </div>
  );
}