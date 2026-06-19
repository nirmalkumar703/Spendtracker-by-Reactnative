import React from 'react';
import { ScrollView } from 'react-native';
import {FlatList} from 'react-native';
import AppHeader from '../../components/common/AppHeader';
import {Transaction} from '../../types/transaction.types';
import {SafeAreaView, Text, StyleSheet,} from 'react-native';
import TransactionCard from '../../components/transaction/TransactionCard';
import {useState, useEffect} from 'react';
import {Button} from 'react-native';
import {TextInput} from 'react-native';
import { View } from 'react-native';
import {saveTransactions, getTransactions,} from '../../services/storage/transactionStorage';
import { Dropdown } from 'react-native-element-dropdown';
import {DrawerActions} from '@react-navigation/native';
import MaterialCommunityIcons from '@react-native-vector-icons/material-design-icons';
import {useNavigation} from '@react-navigation/native';
import {Image} from 'react-native';
import {Alert} from 'react-native';

  
  const transactions: Transaction[] = [
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
  ];

const HomeScreen = () => {

    const [transactions, setTransactions] =
    useState<Transaction[]>([]);
    const [merchant, setMerchant] =useState('');
    const [amount, setAmount] =useState('');
    const [category, setCategory] =useState('');
    const [dateTime, setDateTime] =useState('');
    const [moneyType, setMoneyType] = useState('');

    const data = [
        { label: 'income', value: '1' },
        { label: 'expense', value: '2' },
      ];

    
      const cat = [
        { label: 'Food', value: '1' },
        { label: 'Shopping', value: '2' },
        { label: 'Transport', value: '3' },
        { label: 'Bills', value: '4' },
        { label: 'Others', value: '5' },
      ];
      
  const addTransaction = async () => {
    if (merchant.trim() === '') {
      Alert.alert('Error','Enter merchant name');
      return;
    }
  
    if (category === '') {
      Alert.alert('Error','Select category'
      );
      return;
    }
  
    if (amount.trim() === '') {
      Alert.alert('Error','Enter amount');
      return;
    }
  
    if (isNaN(Number(amount))) {
      Alert.alert('Error','Amount must be number');
      return;
    }
  
    if (dateTime.trim() === '') {
      Alert.alert('Error','Enter date/time');
      return;
    }
  
    if (moneyType === '') {
      Alert.alert( 'Error', 'Select income or expense' );
      return;
    }
  
    const newTransaction: Transaction = {
      id: Date.now().toString(),
      amount: Number(amount),
      merchant: merchant,
      category:cat.find(item => item.value === category)?.label || '',
      type:moneyType === '1'  ? 'income'  : 'expense',
      dateTime: dateTime,
      paymentApp: 'GPay',
      transactionMode: 'upi',
    };
  
    const updatedTransactions = [newTransaction, ...transactions,];
  
    setTransactions(updatedTransactions);
  
    await saveTransactions(updatedTransactions);
  
    setAmount('');
    setMerchant('');
    setCategory('');
    setDateTime('');
    setMoneyType('');
  
    Alert.alert('Success','Transaction Added');
  
  };
  
  useEffect(() => {
    const fetchData = async () => {
      const data =await getTransactions();
      const lastTenTransactions = data.slice(0, 10);
      setTransactions(lastTenTransactions);

      console.log('lastTenTransactions: ',lastTenTransactions);
      console.log('data: ',data);
    };
    fetchData();
  }, []);

  const totalIncome =transactions.filter(item => item.type === 'income',)
    .reduce((sum, item) =>  sum + item.amount,0,);

    const totalExpense =transactions.filter(item => item.type === 'expense',)
    .reduce((sum, item) =>sum + item.amount,0,);

    console.log('Income:', totalIncome);
    console.log('Expense:', totalExpense);
    console.log('Remains:', totalIncome-totalExpense);
    const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headStyle}>
      <MaterialCommunityIcons name="menu" size={28} onPress={() => {navigation.dispatch(DrawerActions.openDrawer(),);}}/>
      <MaterialCommunityIcons name="bell" size={28}  color="black" />
      </View>
      <View style={styles.balance}>
        <View>
          <Text style={styles.balanceTitle} >Remaining Balance</Text>
          <Text style={[styles.balanceTitle, {fontSize:30,  fontWeight:'bold', marginTop:0}]} >₹ {totalIncome-totalExpense}</Text>
        </View>
        <Image source={require('../../assets/icon.png')}   style={{ width: 100, height: 100, marginRight:10,}}/>
      </View>
      <View style={styles.incexpcon}>
        <View style={styles.incexp}>
        <Image source={require('../../assets/income.png')}   style={{ width: 50, height: 50, marginRight:10,}}/>
          <View>
            <Text style={styles.income}>Income</Text>
            <Text style={styles.expences}>₹ {totalIncome}</Text>
          </View>
        </View>
        <View style={styles.incexp}>
        <Image source={require('../../assets/spending.png')}   style={{ width: 50, height: 50, marginRight:10,}}/>
          <View>
            <Text style={styles.income}>Expences</Text>
            <Text style={styles.expences}>₹ {totalExpense}</Text>
          </View>
        </View>
      </View>
      <AppHeader title="Recent Transactions" />
    
      <FlatList
        data={transactions}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
            <TransactionCard
            amount={item.amount}
            merchant={item.merchant}
            category={item.category}
            type={item.type}
            dateTime={item.dateTime}
            />
  )}/>



<View style={{borderRadius:10, backgroundColor:"#E5E7EB", margin:10, padding:10}}>
  <View style={{display:'flex', flexDirection:'row', flexWrap:'wrap',justifyContent:'space-around'}}>
    <TextInput
      placeholder="Merchant"
      value={merchant}
      onChangeText={setMerchant}
      placeholderTextColor="#888888"
      style={styles.ipstyle}
    />
    <Dropdown
style={[styles.dropdown,styles.ipstyle]}
        data={cat}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Category"
        placeholderStyle={{
          color: 'gray',
        }}
        value={category}
        onChange={item => {
          setCategory(item.value);
        }}
      />

    <TextInput style={styles.ipstyle}
      placeholderTextColor="#888888"
      placeholder="Amount"
      value={amount}
      onChangeText={setAmount}
    />
    <TextInput
      placeholder="Time"
      value={dateTime}
      onChangeText={setDateTime}
      placeholderTextColor="#888888"
      style={styles.ipstyle}
    
    />
</View>
<Dropdown
style={styles.dropdown}
        data={data}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Type"
        placeholderStyle={{
          color: 'gray',
        }}
        value={moneyType}
        onChange={item => {
            setMoneyType(item.value);
        }}
      />

</View>
  <Button
  title="Add Transaction"
  onPress={addTransaction}
/>
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({

  headStyle:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginVertical:10,
    marginHorizontal:10,
  },

  balance:{
    display:'flex',
    flexDirection:'row',
    backgroundColor:'#1fa978',
    borderRadius:10,
    justifyContent:'space-between'
  },

  balanceTitle:{
    color:'white',
    fontSize:20,
    marginVertical: 10,
    marginHorizontal: 10,
  },

  income:{
    fontSize:15,
    fontWeight:'bold',
  },

  expences:{
    fontWeight:'bold',
    fontSize:25,
   
  },

  incexpcon:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between'
  },

  incexp:{
    display:'flex',
    flexDirection:'row',
    backgroundColor:'#fdfdfd',
    width:'48%',
    height:70,
    padding:10,
    justifyContent:'space-between',
    marginTop:10,
    borderRadius: 12,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  
    elevation: 5,
  },

  ipstyle:{
    backgroundColor:'white',
    width:'48%',
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
    padding: 10,
    height:40,
    borderRadius:10,
    marginTop: 'auto',
  },

  dropdown:{
    backgroundColor:'white',
    width:'98%',
    margin:'auto',
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
    padding: 10,
    borderRadius:10,
    marginTop: 'auto',
    
    },
  
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F8FAFC',
  },

  heading: {
    fontSize: 24,
    fontWeight: '700',
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 5,
    backgroundColor: '#E5E7EB',
    height:50,
    borderRadius:10,
    padding:8,
    width:250,
  },

  transactionContainer:{
    marginTop: 10,
    backgroundColor: '#E5E7EB',
    borderRadius: 10,
    padding: 10,
    flex:3,
  }




});

export default HomeScreen;