import React, {useState} from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,ScrollView} from 'react-native';
import SearchBar from './Components/SearchBar';
import Tasks from './Components/Tasks';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
      <Text style={{fontSize:30,fontWeight:`bold`,}}>Hello , Devs</Text>
     <Text>14 tasks today</Text>
      <Image
        source={require("./assets/person.png")}
        style={{ width: 50, height: 50, marginLeft:320, position:`absolute`,
          backgroundColor: `#fbf9f7`,borderRadius: 100,}}
      />
      <SearchBar/>
      <View>
      <Text style={{fontSize:20,fontWeight:`bold`,marginTop: 20,}}>Categories</Text>
      <View style={styles.picture}>
      <Image id="1"
        source={require("./assets/exercise.png")}
        style={ styles.picture}
        />

        <Image id="2"
        source={require("./assets/study.png")}
        style={ styles.picture}
        />

        <Image id="3"
        source={require("./assets/code.png")}
        style={ styles.picture}
        />

        <Image id="4"
        source={require("./assets/cook.png")}
        style={ styles.picture}
        />

        <Image id="5"
        source={require("./assets/Garden.png")}
        style={ styles.picture}
        />

        <Image id="6"
        source={require("./assets/walk.png")}
        style={ styles.picture}
        />

        <Image id="7"
        source={require("./assets/teach.png")}
        style={ styles.picture}
        />

        <Image id="8"
        source={require("./assets/wash.png")}
        style={ styles.picture}
        />
        </View>
        </View>
        <Text style={{fontSize:20,fontWeight:`bold`,marginTop: 40,}}>Ongoing Task</Text>
        <Tasks/>
      <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f0e8',
    padding: 30,

  },
        picture : {
        flexDirection:`row`,
        margin:5,
        width: 200, 
        height: 200,
        borderRadius: 10,
        backgroundColor: '#fbf9f7',
        
}

});

            