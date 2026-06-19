
import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {PieChart, LineChart} from 'react-native-gifted-charts';

import {getTransactions} from '../../services/storage/transactionStorage';
import {Transaction} from '../../types/transaction.types';

const DashboardScreen = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await getTransactions();
      setTransactions(data);
    };
    loadData();
  }, []);

  const totalIncome = transactions
    .filter(item => item.type === 'income')
    .reduce((sum, item) => sum + item.amount, 0);

  const totalExpense = transactions
    .filter(item => item.type === 'expense')
    .reduce((sum, item) => sum + item.amount, 0);

  const colorType = {
    Food: '#F97316',
    Shopping: '#8B5CF6',
    Transport: '#3B82F6',
    Bills: '#22C55E',
    Others: '#EF4444',
  };

  const groupedExpense = transactions
    .filter(item => item.type === 'expense')
    .reduce((acc, item) => {
      acc[item.category] = (acc[item.category] || 0) + item.amount;
      return acc;
    }, {} as Record<string, number>);

  const pieData = Object.entries(groupedExpense).map(
    ([category, amount]) => ({
      value: amount,
      text: category,
      color:
        colorType[category as keyof typeof colorType] || '#94A3B8',
    }),
  );

  const lineData = transactions.map((item, index) => ({
    value: item.amount,
    label: `${index + 1}`,
  }));

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}>

      <View style={styles.balanceCard}>
        <Text style={styles.balanceLabel}>Total Balance</Text>

        <Text style={styles.balanceAmount}>
          ₹{(totalIncome - totalExpense).toLocaleString()}
        </Text>

        <Svg width="100%" height={100} viewBox="0 0 360 100">
          <Path
            d="M0 80 C30 90,60 20,90 50 S150 100,180 40 S240 80,270 20 S330 40,360 0"
            stroke="white"
            strokeWidth="3"
            fill="none"
          />
        </Svg>
      </View>

      <View style={styles.summaryContainer}>
        <View
          style={[
            styles.summaryCard,
            {backgroundColor: '#DCFCE7'},
          ]}>
          <Text style={styles.cardTitle}>Income</Text>
          <Text style={styles.cardAmount}>₹{totalIncome}</Text>
        </View>

        <View
          style={[
            styles.summaryCard,
            {backgroundColor: '#FEE2E2'},
          ]}>
          <Text style={styles.cardTitle}>Expense</Text>
          <Text style={styles.cardAmount}>₹{totalExpense}</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>
        Expense Breakdown
      </Text>

      <View style={styles.chartCard}>
        <View style={styles.pieRow}>
          <PieChart
            donut
            radius={80}
            innerRadius={45}
            data={pieData}
            centerLabelComponent={() => (
              <View>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 12,
                  }}>
                  Expense
                </Text>

                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}>
                  ₹{totalExpense}
                </Text>
              </View>
            )}
          />

          <View style={styles.legendContainer}>
            {pieData.map(item => (
              <View
                key={item.text}
                style={styles.legendItem}>
                <View
                  style={[
                    styles.legendDot,
                    {backgroundColor: item.color},
                  ]}
                />

                <View>
                  <Text style={styles.legendText}>
                    {item.text}
                  </Text>

                  <Text style={styles.legendAmount}>
                    ₹{item.value}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </View>

      <Text style={styles.sectionTitle}>
        Monthly Trend
      </Text>

      <LineChart
        data={lineData}
        height={220}
        width={300}
        spacing={40}
        initialSpacing={20}
        thickness={3}
        color="#2563EB"
        hideDataPoints={false}
        dataPointsColor="#2563EB"
        dataPointsRadius={5}
        noOfSections={5}
        isAnimated
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    padding: 16,
  },

  balanceCard: {
    backgroundColor: '#2563EB',
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
  },

  balanceLabel: {
    color: 'white',
    fontSize: 16,
  },

  balanceAmount: {
    color: 'white',
    fontSize: 34,
    fontWeight: 'bold',
  },

  summaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },

  summaryCard: {
    width: '48%',
    borderRadius: 16,
    padding: 16,
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
  },

  cardAmount: {
    fontSize: 22,
    fontWeight: 'bold',
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 15,
  },

  chartCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },

  pieRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  legendContainer: {
    flex: 1,
    marginLeft: 20,
  },

  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },

  legendDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 10,
  },

  legendText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#111827',
  },

  legendAmount: {
    fontSize: 13,
    color: '#6B7280',
    marginTop: 2,
  },
});

export default DashboardScreen;