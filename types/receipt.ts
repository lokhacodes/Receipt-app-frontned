export interface ReceiptItem {
  name: string;
  quantity: number;
  price: number;
}

export interface ReceiptData {
  merchant: string;
  address: string;
  phone: string;
  date: string;
  time: string;
  subtotal: number;
  tax: number;
  total: number;
  items: ReceiptItem[];
  rawText: string;
}