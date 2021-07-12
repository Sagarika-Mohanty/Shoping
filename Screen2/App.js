import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';


import Data from './components/Data';



export default function App() {
  return (
    <View style={styles.container}>
     
      
        <Data />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
 
   
  },
  
});
