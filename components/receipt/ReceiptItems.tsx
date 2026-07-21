"use client";

import { ReceiptData, ReceiptItem } from "@/types/receipt";
import ReceiptItemRow from "./ReceiptRow";

interface Props {
  receipt: ReceiptData;
  setReceipt: React.Dispatch<React.SetStateAction<ReceiptData>>;
}

export default function ReceiptItems({
  receipt,
  setReceipt,
}: Props) {

  //----------------------------------------
  // Update Item
  //----------------------------------------

  const updateItem = (
    index: number,
    field: keyof ReceiptItem,
    value: string | number
  ) => {

    const items = [...receipt.items];

    items[index] = {
      ...items[index],
      [field]: value,
    };

    const subtotal = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    setReceipt({
      ...receipt,
      items,
      subtotal,
      total: subtotal + receipt.tax,
    });
  };

  //----------------------------------------
  // Delete Item
  //----------------------------------------

  const deleteItem = (index: number) => {

    const items = receipt.items.filter(
      (_, i) => i !== index
    );

    const subtotal = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    setReceipt({
      ...receipt,
      items,
      subtotal,
      total: subtotal + receipt.tax,
    });
  };

  //----------------------------------------
  // Add Item
  //----------------------------------------

  const addItem = () => {

    const items = [
      ...receipt.items,
      {
        name: "",
        quantity: 1,
        price: 0,
      },
    ];

    setReceipt({
      ...receipt,
      items,
    });
  };

  return (
    <div className="mt-6">

      <div className="rounded-xl bg-gray-100 p-4">

        {receipt.items.map((item, index) => (

          <div
            key={index}
            className="mb-3"
          >

            <ReceiptItemRow
              item={item}
              index={index}
              updateItem={updateItem}
              deleteItem={deleteItem}
            />

          </div>

        ))}

        <button
          onClick={addItem}
          className="mt-2 w-full rounded-lg border-2 border-dashed border-gray-400 py-3 font-semibold text-gray-700 transition hover:bg-gray-200"
        >
          + Add Item
        </button>

      </div>

    </div>
  );

}