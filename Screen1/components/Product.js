import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function Product() {
  return (
    
    <View style={styles.container}>
      <View style={styles.arrow}> 
      <Image style={styles.leftarrow}	source={require('../assets/arrow.webp')} />
 </View>
      <Image style={styles.head} source={require('../assets/headphone.png')} />
      <View style={styles.lines}>
      <View style={styles.line1}></View>
      <View style={styles.line2}></View>
      <View style={styles.line2}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"#f2f2f2",
    borderRadius: 25,
    paddingLeft:20,
    flex:.5

  },
  head:{
    height:250,
    width:250,   
 
  },
  arrow:{
    height:30,
    width:30,
    borderRadius:10,
    backgroundColor:"white",
    alignSelf:"flex-start",
    fontWeight:"bold",
    justifyContent:"center",
    alignItems: "center",
  },
  lines:{
    flexDirection:"row",
    marginTop:"10%"
    

  },
  line1:{
    height:4,
    width:60,
    backgroundColor: "black",
    borderRadius:50,
    marginHorizontal:4,
    
  },
   line2:{
    height:4,
    width:60,
    backgroundColor: "#dadada",
    borderRadius:50,
     marginHorizontal:4,
  },
  leftarrow:{
    height:20,
    width:20,
  }
});
