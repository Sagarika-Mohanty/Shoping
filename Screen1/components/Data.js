import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Data() {
  return (
    
    <View style={styles.container}>
    <View style={styles.sop}>
      <Image style={styles.cart}	source={require('../assets/shop.png')} />
      <Text style={styles.soptxt}>Shopping</Text>
      </View>

      <View style={styles.akgbox}>
      <Text style={styles.akg}>AKG N700NCM2 </Text>
      <View style={styles.box}>
      <Image style={styles.share}	source={require('../assets/share.png')} />
      </View>
      </View>
       <Text style={styles.hi}>Hi-Fi Shop & Service Rustaveli Ave 57 </Text>
      <Text style={styles.hi}>This shop offers both products and 
      services</Text>

      <View style={styles.row}>
          <View style={styles.box1}>
          <Image style={styles.share}	source={require('../assets/loc.png')} />
          </View>
          <View>
          <Text style={styles.hi}>Rustaveli Ave 57  </Text>
          <Text style={styles.hi}>17-001,Batumi</Text>
          </View>
          <Image style={styles.arrow}	source={require('../assets/leftarrow.png')} />
      </View>
      <View style={styles.hr}	></View>
      <View>
          <Text style={styles.price}>$ 199.00</Text>
          <Text style={styles.hi}>Tax Rate 2% - $4.00 (~$195.00)</Text>
      </View>


       <TouchableOpacity style={styles.btn}>
       <Text style={styles.btntxt}> ADD TO CART</Text>
       </TouchableOpacity>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
 
    borderRadius: 25,
    padding:20,
    flex:.5
  },
  cart:{
    height:20,
    width:20,
  },
  sop:{
    flexDirection:"row",    
    marginTop:5
  },
  soptxt:{
    paddingHorizontal:10,
    color:"#2e4cfa",
    fontWeight:"bold"
  },
  akg:{
    fontWeight:"bold",
    fontSize:20,
    marginRight:"33%"
    
  },
  hi:{
    color:"#a9a9a9",
    marginVertical:2,
    fontSize:12
  },
  akgbox:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    marginVertical:5
    
  },
  box:{
    height:40,
    width:40,
    backgroundColor: "#ebf1fe",
    borderRadius:50,
    justifyContent:"center",
    alignItems:"center",
    },
     box1:{
    height:50,
    width:50,
    backgroundColor: "#ebf1fe",
    borderRadius:10,
    justifyContent:"center",
    alignItems:"center",
    },
  share:{
    width:20,
    height:20,

  },
  row:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    marginTop:20,

  },
   arrow:{
    height:30,
    width:30,
    marginLeft:"40%",

  
  },
  hr:{
    borderBottomColor:"#f1f1f1",
    borderBottomWidth:1,
    marginVertical:22
  },
  price:{
    fontSize:20,
    fontWeight:"bold",
    marginBottom:5
  },
  btn:{
    backgroundColor:"#2e4cfa",
    height:"15%",
    borderRadius:20,
    justifyContent:"center",
    alignItems:"center",
    marginVertical:28,
    marginBottom:"2%",
  },
  btntxt:{
    color:"white",
    fontWeight:"bold",

  }

  
  
});
