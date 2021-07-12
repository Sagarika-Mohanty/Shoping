import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
    <View style={styles.box}>
      <View style={styles.arrow}> 
      <Image style={styles.leftarrow}	source={require('../assets/arrow.webp')} />
 </View>
 <Text style={styles.text}>Order Details</Text>
 </View>
<Text style={styles.text1}>My Cart</Text>



 <View style={styles.row1}>
      <View style={styles.hbox}>
        <Image style={styles.head}	source={require('../assets/head.png')} />  
      </View>
      <View style={styles.details}>
          <Text style={styles.akg}>AKG N700NCM2 Wireless{"\n"}Headphones</Text>
          <Text style={styles.gray}>$199.00(-$4.00 Tax)</Text>
           

          <View style={styles.row2}>
            <View style={styles.min}>
            <Text> - </Text> 
            </View>     
            <Text> 1 </Text>
            <View style={styles.pul}>
             <Text> + </Text>
             
            </View>   
             
           <Image style={styles.del}	source={require('../assets/del.png')} />
           
          </View>


      </View>
 </View>


<Text style={styles.text1}>Delivery location</Text>


<View style={styles.row3}>
    <View style={styles.box1}>
          <Image style={styles.share}	source={require('../assets/loc.png')} />
          </View>
    <View>
    <Text style={styles.akg}>2 Peter Melikishvili St.</Text>
    <Text style={styles.gray}>0162, Tbilisi</Text>
    </View>
     <View style={styles.laro}> 
      <Image style={styles.leftarrow}	source={require('../assets/laro.png')} />
 </View>
</View>

<Text style={styles.text1}>Payment Method</Text>


<View style={styles.row3}>
    <View style={styles.box1}>
          <Text style={styles.visa}>VISA</Text>
          </View>
    <View>
    <Text style={styles.akg}>VISA Classic</Text>
    <Text style={styles.gray}>****-0921</Text>
    </View>
     <View style={styles.laro1}> 
      <Image style={styles.leftarrow}	source={require('../assets/laro.png')} />
 </View>
</View>


<Text style={styles.text2}>Order Info</Text>


<View style={styles.row3}>
   
 <Text style={styles.sub}	>Subtotal</Text>
     <Text style={styles.subb}>$199.00</Text>
</View>
<View style={styles.row3}>
   
 <Text style={styles.sub}>Shipping Cost</Text>
     <Text style={styles.subb}>+$10.00</Text>
</View>
<View style={styles.row4}>
   
 <Text style={styles.sub}>Total</Text>
     <Text style={styles.to}>$209.00</Text>
</View>

 <TouchableOpacity style={styles.btn}>
       <Text style={styles.btntxt}> CHECKOUT ($209.00)</Text>
       </TouchableOpacity>
   
    </View>
   

  );
}

const styles = StyleSheet.create({
  container: {
    // alignItems: 'center',
    // justifyContent: 'center',
    padding: 24,
    flex:1
  },
  arrow:{
    height:30,
    width:30,
    borderRadius:10,
    backgroundColor:"#f2f2f2",
    alignSelf:"flex-start",
    fontWeight:"bold",
    justifyContent:"center",
    alignItems: "center",
  },
  leftarrow:{
    height:20,
    width:20,
  },
  del:{
    height:12,
    width:12,
    backgroundColor:"#f2f2f2",
  
  },
   delb:{
    height:20,
    width:20,
    backgroundColor:"#f2f2f2",
    justifyContent:"center",
    alignItems: "center",
  padding:15,
  borderRadius:50,
  marginLeft:"18%"
  },
   laro:{
    height:30,
    width:30,
    borderRadius:10,
    backgroundColor:"#f2f2f2",
    alignSelf:"flex-start",
    fontWeight:"bold",
    justifyContent:"center",
    alignItems: "center",
    marginLeft:"35%"
  },
   laro1:{
    height:30,
    width:30,
    borderRadius:10,
    backgroundColor:"#f2f2f2",
    alignSelf:"flex-start",
    fontWeight:"bold",
    justifyContent:"center",
    alignItems: "center",
    marginLeft:"52%"
  },
  text:{
    fontWeight:"bold",
    flexDirection: "row",
    paddingRight:"35%",
    fontSize:15
     },
     box:{
       flexDirection:"row",
       alignItems:"center",
       justifyContent:"space-between"
     },
     text1:{
       fontSize:18,
       fontWeight:"bold",
       marginTop:"8%"
     },
      hbox:{
        backgroundColor:"#f2f2f2",
        height:90,
        width:90,
        marginTop:10,
        borderRadius:10,
        justifyContent:"center",
    alignItems: "center",

      },
      head:{
           height:80,
        width:80,
      },
      row1:{
        flexDirection:"row"
      },
      details:{
        paddingTop:10,
        paddingLeft:15
      },
      akg:{
        fontWeight:"bold",
        fontSize:12
      },
      gray:{
         color:"#c1c1c1", 
         paddingVertical:5,
         fontSize:11
      },
      min:{
         borderColor:"#c1c1c1",
         borderWidth:1,
         borderRadius:50,
         height:20,
         width:20,
         justifyContent:"center",
    alignItems: "center",
    color:"#c1c1c1",
    marginRight:15
    
      },
  pul:{
         borderColor:"#c1c1c1",
         borderWidth:1,
         borderRadius:50,
         height:20,
         width:20,
         justifyContent:"center",
    alignItems: "center",
    color:"#c1c1c1",
    marginHorizontal:15
      },
  row2:{
        flexDirection:"row",
        marginTop:9,
        justifyContent:"space-between",
        alignItems:"center"
      },
  box1:{
    height:40,
    width:40,
    backgroundColor: "#ebf1fe",
    borderRadius:10,
    justifyContent:"center",
    alignItems:"center",
    },
  share:{
    width:20,
    height:20,

  },
  row3:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignContent:"center",
    marginTop:20,
     
  },
  text2:{
       fontSize:20,
       fontWeight:"bold",
       marginTop:"15%"
     },
     btn:{
    backgroundColor:"#2e4cfa",
    height:"8%",
    borderRadius:20,
    justifyContent:"center",
    alignItems:"center",
    marginVertical:"8%",
    marginBottom:"5%"
  },
  btntxt:{
    color:"white",
    fontWeight:"bold"
  },
  sub:{
      color:"#a1a1a1",
  },
  subb:{
      color:"#a1a1a1",
      fontWeight:"bold"
  },
  to:{
    fontWeight:"bold",
    fontSize:20
  },
  visa:{
    fontSize:10,
    fontWeight:"bold",
    color:"#2e4cfa"
  },
   row4:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignContent:"center",
    alignItems:"center",
    marginTop:20,
  },
  
});
