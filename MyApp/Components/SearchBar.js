import React, {useState} from 'react';
import { StyleSheet, View, TextInput, Image } from 'react-native';

export default function SearchBar({ onChangeText, value }) {
    return (
      <View style={styles.main}>
        <Image
        source={require("../Images/image 2.jpg")} 
        style={styles.icon}
      />
        <TextInput
          style={styles.input}
          placeholder="Search"
          onChangeText={onChangeText}
          value={value}
    />
    <Image
        source={require("../Images/image 3.png")} 
        style={{ width: 50, height: 50, marginLeft:310, position:`absolute`,
        backgroundColor: `#f0522f`,borderRadius: 10,}}
      />
      </View>
    );
  }

  const styles = StyleSheet.create({
    main: {
      backgroundColor: '#fbf9f7',
      flexDirection: 'row',
      alignItems: `center`,
      padding: 10,
      borderRadius: 15,
      marginTop : 30,
      width: 300,
    },

    icon: {
      width: 20,
      height: 20,
      marginRight: 10,
    },

    input: {
      flex: 1,
     paddingLeft: 10,
      fontSize: 20,
      color: '#333',
    },
  });
