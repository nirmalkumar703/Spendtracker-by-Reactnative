import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

type Props = {
  amount: number;
  merchant: string;
  category: string;
  type: 'income' | 'expense';
  dateTime: string;
};

const TransactionCard = ({
  amount,
  merchant,
  category,
  type,
  dateTime,
}: Props) => {
  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.merchant}>
          {merchant}
        </Text>

        <Text style={styles.category}>
          {category}
        </Text>
      </View>

      <View>
        <Text
          style={[
            styles.amount,
            {
              color:
                type === 'income'
                  ? 'green'
                  : 'red',
            },
          ]}>
          ₹{amount}
        </Text>

        <Text style={styles.date}>
          {dateTime}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    padding: 16,
    marginBottom: 12,
    borderRadius: 12,

    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  merchant: {
    fontSize: 16,
    fontWeight: '600',
  },

  category: {
    color: 'gray',
  },

  amount: {
    fontWeight: '700',
    textAlign: 'right',
  },

  date: {
    color: 'gray',
    fontSize: 12,
  },
});

export default TransactionCard;