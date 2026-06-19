
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {getTransactions} from '../../services/storage/transactionStorage';
import {Transaction} from '../../types/transaction.types';

const menuItems = [
  {icon: 'account-circle', title: 'Personal Information'},
  {icon: 'credit-card-outline', title: 'Payment Methods'},
  {icon: 'bullseye-arrow', title: 'My Goals'},
  {icon: 'history', title: 'Transaction History'},
  {icon: 'chart-pie', title: 'Budget'},
  {icon: 'file-chart-outline', title: 'Reports'},
];

const ProfileScreen = () => {
  const [transactions, setTransactions] =
    useState<Transaction[]>([]);

  useEffect(() => {
    const loadData = async () => {
      setTransactions(await getTransactions());
    };

    loadData();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileCard}>
        <Image
          source={require('../../assets/profile.jpeg')}
          style={styles.avatar}
        />

        <TouchableOpacity style={styles.cameraButton}>
          <MaterialCommunityIcons
            name="camera"
            size={18}
            color="#6D5DFC"
          />
        </TouchableOpacity>

        <Text style={styles.name}>Rohit Sharma</Text>
        <Text style={styles.email}>
          rohit.sharma@email.com
        </Text>
      </View>

      <View style={styles.menuCard}>
        {menuItems.map(item => (
          <TouchableOpacity
            key={item.title}
            style={styles.menuItem}>
            <View style={styles.menuLeft}>
              <MaterialCommunityIcons
                name={item.icon}
                size={24}
                color="#6D5DFC"
              />

              <Text style={styles.menuText}>
                {item.title}
              </Text>
            </View>

            <MaterialCommunityIcons
              name="chevron-right"
              size={24}
              color="#9CA3AF"
            />
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.statsCard}>
        <View>
          <Text style={styles.statsLabel}>
            Total Transactions
          </Text>

          <Text style={styles.statsValue}>
            {transactions.length}
          </Text>
        </View>

        <MaterialCommunityIcons
          name="chart-bar"
          size={60}
          color="#6D5DFC"
        />
      </View>

      <View style={styles.memberCard}>
        <MaterialCommunityIcons
          name="calendar-month"
          size={28}
          color="#2563EB"
        />

        <View style={{marginLeft: 15}}>
          <Text style={styles.memberLabel}>
            Member Since
          </Text>

          <Text style={styles.memberValue}>
            January 2024
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FB',
    padding: 15,
  },

  profileCard: {
    backgroundColor: '#7C4DFF',
    borderRadius: 25,
    alignItems: 'center',
    paddingVertical: 30,
    marginBottom: 20,
  },

  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 3,
    borderColor: '#FFF',
  },

  cameraButton: {
    position: 'absolute',
    right: 120,
    top: 105,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  name: {
    color: '#FFF',
    fontSize: 32,
    fontWeight: '700',
    marginTop: 15,
  },

  email: {
    color: '#E5E7EB',
    fontSize: 16,
    marginTop: 5,
  },

  menuCard: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    marginBottom: 20,
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },

  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },

  menuLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  menuText: {
    marginLeft: 15,
    fontSize: 17,
    fontWeight: '500',
  },

  statsCard: {
    backgroundColor: '#F3EEFF',
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },

  statsLabel: {
    fontSize: 16,
    color: '#6B7280',
  },

  statsValue: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#111827',
  },

  memberCard: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 20,
    marginBottom: 40,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },

  memberLabel: {
    color: '#6B7280',
    fontSize: 15,
  },

  memberValue: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111827',
  },
});

export default ProfileScreen;