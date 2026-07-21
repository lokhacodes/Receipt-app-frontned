export interface Expense {
  id: string;

  expense: string;

  merchant: string;

  address: string;

  amount: number;

  currency: string;

  quantity: number;

  category: string;

  description?: string;

  notes?: string;

  date: string;

  inReport: boolean;
}