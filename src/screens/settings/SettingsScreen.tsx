
import React, {useState} from 'react';

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Switch,
  TouchableOpacity,
} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SettingsScreen = () => {
  const [notification, setNotification] = useState(true);
  const [biometric, setBiometric] = useState(true);

  const SettingItem = ({
    icon,
    title,
    value,
    showArrow = true,
  }: {
    icon: string;
    title: string;
    value?: string;
    showArrow?: boolean;
  }) => (
    <TouchableOpacity style={styles.item}>
      <View style={styles.left}>
        <MaterialCommunityIcons
          name={icon}
          size={24}
          color="#2563EB"
        />
        <Text style={styles.itemText}>
          {title}
        </Text>
      </View>

      <View style={styles.right}>
        {value && (
          <Text style={styles.valueText}>
            {value}
          </Text>
        )}

        {showArrow && (
          <MaterialCommunityIcons
            name="chevron-right"
            size={24}
            color="#9CA3AF"
          />
        )}
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}>

      <Text style={styles.title}>
        Settings
      </Text>

      <Text style={styles.sectionTitle}>
        Preferences
      </Text>

      <View style={styles.card}>
        <SettingItem
          icon="currency-inr"
          title="Currency"
          value="INR (₹)"
        />

        <View style={styles.switchItem}>
          <View style={styles.left}>
            <MaterialCommunityIcons
              name="bell"
              size={24}
              color="#F59E0B"
            />
            <Text style={styles.itemText}>
              Notifications
            </Text>
          </View>

          <Switch
            value={notification}
            onValueChange={setNotification}
          />
        </View>

        <View style={styles.switchItem}>
          <View style={styles.left}>
            <MaterialCommunityIcons
              name="fingerprint"
              size={24}
              color="#7C3AED"
            />
            <Text style={styles.itemText}>
              Biometric Lock
            </Text>
          </View>

          <Switch
            value={biometric}
            onValueChange={setBiometric}
          />
        </View>

        <SettingItem
          icon="translate"
          title="Language"
          value="English"
        />
      </View>

      <Text style={styles.sectionTitle}>
        Data & Security
      </Text>

      <View style={styles.card}>
        <SettingItem
          icon="cloud-upload"
          title="Backup & Restore"
        />

        <SettingItem
          icon="download"
          title="Export Data"
        />

        <SettingItem
          icon="delete"
          title="Clear All Data"
        />
      </View>

      <Text style={styles.sectionTitle}>
        About
      </Text>

      <View style={styles.card}>
        <SettingItem
          icon="help-circle"
          title="Help & Support"
        />

        <SettingItem
          icon="information"
          title="About App"
        />

        <SettingItem
          icon="logout"
          title="Logout"
        />
      </View>

      <View style={{height: 30}} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    padding: 16,
  },

  title: {
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'center',
    marginVertical: 20,
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 12,
    marginTop: 15,
  },

  card: {
    backgroundColor: '#FFF',
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },

  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },

  switchItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },

  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  right: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  itemText: {
    fontSize: 18,
    marginLeft: 14,
    color: '#111827',
    fontWeight: '500',
  },

  valueText: {
    color: '#6B7280',
    marginRight: 8,
    fontSize: 16,
  },
});

export default SettingsScreen;