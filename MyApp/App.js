import React, {useState} from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,} from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:30,fontWeight:`bold`,}}>Hello , Devs</Text>
     <Text>14 tasks today</Text>
      <Image
        source={require("./Images/image 1.png")}
        style={{ width: 50, height: 50, marginLeft:300, position:`absolute`,
          backgroundColor: `#fbf9f7`,borderRadius: 100,}}
      />
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f0e8',
    padding: 30,

  },
 
});

            