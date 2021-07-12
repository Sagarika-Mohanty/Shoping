import * as React from 'react';
import { Text, View, StyleSheet,StatusBar } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import Sagarika from './components/Product';
import Data from './components/Data';
// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
    <Sagarika/>
      <Data/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
   
    padding:2,
     
   
    
  },
  
});
