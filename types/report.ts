export interface Report {
  id: string;

  title: string;

  description?: string;

  baseCurrency: string;

  totalAmount: number;

  status: "Draft" | "Pending" | "Completed";

  expenseCount: number;

  createdAt: string;
}

export interface ReportExpense {
  id: string;

  expense: string;

  merchant: string;

  amount: number;

  currency: string;

  category: string;

  expense_date: string;

  selected?: boolean;
}