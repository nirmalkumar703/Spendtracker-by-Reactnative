import {create} from 'zustand';

export interface Transaction {
  id: string;
  amount: number;
  category: string;
  type: 'income' | 'expense';
  merchant: string;
  note?: string;
  dateTime: string;
  paymentApp: string;
  transactionMode: 'upi' | 'mobile_number' | 'qr_scan';
}

interface TransactionState {
  transactions: Transaction[];

  addTransaction: (
    transaction: Transaction,
  ) => void;
}

export const useTransactionStore =
  create<TransactionState>(set => ({
    transactions: [
        {
          id: '1',
          amount: 499,
          category: 'Food',
          type: 'expense',
          merchant: 'Swiggy',
          dateTime: 'Today',
          paymentApp: 'GPay',
          transactionMode: 'upi',
        },
        {
          id: '2',
          amount: 1200,
          category: 'Shopping',
          type: 'expense',
          merchant: 'Amazon',
          dateTime: 'Yesterday',
          paymentApp: 'PhonePe',
          transactionMode: 'upi',
        },
        {
          id: '3',
          amount: 25000,
          category: 'Income',
          type: 'income',
          merchant: 'Salary',
          dateTime: '1 Jun',
          paymentApp: 'Bank',
          transactionMode: 'upi',
        },
      ],

    addTransaction: transaction =>
      set(state => ({
        transactions: [
          transaction,
          ...state.transactions,
        ],
      })),
  }));


