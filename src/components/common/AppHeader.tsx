import React from 'react';
import {Text, View} from 'react-native';
import {
    SafeAreaView,
    StyleSheet,
  } from 'react-native';

const AppHeader = ({
  title,
}: {
  title: string;
}) => {
  return (
    <View>
      <Text style={styles.heading}>{title}</Text>
    </View>
  );

  
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      backgroundColor: '#F8FAFC',
      
    },
  
    heading: {
      fontSize: 15,
      fontWeight: '700',
      borderRadius:10,
      paddingVertical:10,
    },
})
export default AppHeader;