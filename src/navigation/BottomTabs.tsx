import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';

import HomeScreen from '../screens/home/HomeScreen';
import DashboardScreen from '../screens/dashboard/DashboardScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
import SettingsScreen from '../screens/settings/SettingsScreen';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,

        tabBarActiveTintColor: '#2563EB',
        tabBarInactiveTintColor: '#9CA3AF',

        tabBarStyle: {
          height: 70,
          paddingBottom: 10,
          paddingTop: 10,
        },

        tabBarIcon: ({color, size}) => {
          switch (route.name) {
            case 'Home':
              return (
                <MaterialDesignIcons
                  name="home"
                  size={size}
                  color={color}
                />
              );

            case 'Dashboard':
              return (
                <MaterialDesignIcons
                  name="chart-line"
                  size={size}
                  color={color}
                />
              );

            case 'Profile':
              return (
                <MaterialDesignIcons
                  name="account"
                  size={size}
                  color={color}
                />
              );

            case 'Settings':
              return (
                <MaterialDesignIcons
                  name="cog"
                  size={size}
                  color={color}
                />
              );

            default:
              return null;
          }
        },
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
      />

      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
      />

      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;