export type TransactionType =
  | 'income'
  | 'expense';

export type TransactionMode =
  | 'upi'
  | 'mobile_number'
  | 'qr_scan';

export interface Transaction {
  id: string;
  amount: number;
  category: string;
  type: TransactionType;
  merchant: string;
  note?: string;
  dateTime: string;
  paymentApp: string;
  transactionMode: TransactionMode;
}