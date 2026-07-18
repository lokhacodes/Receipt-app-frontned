"use client";

import { useState } from "react";
import { ExpenseItemType } from "../../types/expense";

export function useExpenseItems() {
  const [items, setItems] = useState<ExpenseItemType[]>([
    {
      id: crypto.randomUUID(),
      name: "Chicken",
      quantity: 1,
      price: 320,
    },
    {
      id: crypto.randomUUID(),
      name: "Rice",
      quantity: 2,
      price: 80,
    },
  ]);

  const addItem = () => {
    setItems((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        name: "",
        quantity: 1,
        price: 0,
      },
    ]);
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateItem = (
    id: string,
    field: keyof ExpenseItemType,
    value: string | number
  ) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, [field]: value }
          : item
      )
    );
  };

  return {
    items,
    addItem,
    removeItem,
    updateItem,
  };
}