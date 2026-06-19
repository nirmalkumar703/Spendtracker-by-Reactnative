import AsyncStorage from '@react-native-async-storage/async-storage';
// AsyncStorage.clear();
const KEY = 'transactions';

export const saveTransactions = async (transactions: any,) => {
  await AsyncStorage.setItem(KEY,JSON.stringify(transactions),
  );
};

export const getTransactions = async () => {
  const data =await AsyncStorage.getItem(KEY);
  return data? JSON.parse(data): [];
};