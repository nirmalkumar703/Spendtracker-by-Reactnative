# SpendMonitor – Personal Finance Tracker

A modern React Native application for tracking income, expenses, budgets, and financial insights. SpendMonitor helps users manage daily transactions, monitor spending patterns, and visualize financial data through interactive dashboards.

---

## Features

### Transaction Management

* Add income and expense transactions
* Categorize transactions
* Store merchant details
* Track transaction dates
* Input validation and error handling
* Persistent local storage

### Dashboard Analytics

* Total balance overview
* Income vs Expense summary
* Expense breakdown using Pie Chart
* Monthly spending trends using Line Chart
* Category-wise expense visualization
* Interactive financial insights

### Profile Management

* User profile interface
* Transaction statistics
* Financial activity overview
* Personalized dashboard

### Settings

* Notification preferences
* Biometric lock settings
* Data export options
* Backup and restore options
* Language preferences

---

## Tech Stack

### Frontend

* React Native
* TypeScript

### Navigation

* React Navigation
* Drawer Navigation

### Data Visualization

* react-native-gifted-charts
* react-native-svg

### Storage

* AsyncStorage

### UI Components

* react-native-vector-icons
* react-native-element-dropdown

---

## Project Structure

```text
src/
│
├── assets/
│
├── components/
│   ├── common/
│   └── transaction/
│
├── screens/
│   ├── home/
│   ├── dashboard/
│   ├── profile/
│   └── settings/
│
├── services/
│   └── storage/
│
├── navigation/
│
├── types/
│
└── utils/
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/your-username/SpendMonitor.git
cd SpendMonitor
```

### Install Dependencies

```bash
npm install
```

### iOS Setup

```bash
cd ios
pod install
cd ..
```

### Run Android

```bash
npx react-native run-android
```

### Run iOS

```bash
npx react-native run-ios
```

---

## Required Packages

```bash
npm install @react-navigation/native
npm install @react-navigation/drawer
npm install react-native-safe-area-context
npm install react-native-screens
npm install @react-native-async-storage/async-storage
npm install react-native-gifted-charts
npm install react-native-svg
npm install react-native-element-dropdown
npm install react-native-vector-icons
```

---

## Screens

### Home Screen

* Add transactions
* View recent transactions
* Income and expense summary
* Current balance

### Dashboard Screen

* Expense Pie Chart
* Spending Trend Line Chart
* Category Analysis
* Financial Overview

### Profile Screen

* User Profile
* Total Transactions
* Financial Statistics

### Settings Screen

* Notifications
* Biometric Security
* Backup & Restore
* Data Export

---

## Data Model

```typescript
interface Transaction {
  id: string;
  amount: number;
  merchant: string;
  category: string;
  type: 'income' | 'expense';
  dateTime: string;
  paymentApp: string;
  transactionMode: string;
}
```

---

## Future Enhancements

* Cloud Backup
* User Authentication
* Budget Planning
* Expense Prediction
* PDF Reports
* Multi-Currency Support
* Dark Mode
* Export to Excel
* Financial Goals Tracking

---

## Author

Nirmal Kumar

B.Tech Artificial Intelligence and Data Science

Karpagam College of Engineering

---

## License

This project is developed for educational and learning purposes.
