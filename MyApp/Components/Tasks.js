import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'


const Tasks = () => {

    const [things, setThings] = useState([
        {text:'Mobile App Devolopment', key:'1'},
        {text:'Web Devolopment', key:'2'},
        {text:'Push Ups', key:'3'},               
        {text:'Data Structures', key:'4'},
        {text:'Software Engineering', key:'5'},
        {text:'Teach', key:'6'},
        {text:'Code', key:'7'},
        {text:'Cook', key:'8'},
        {text:'Networking', key:'9'},
        {text:'Walk', key:'10'},
        {text:'UI/UX Design', key:'11'},
        {text:'Wash', key:'12'},
        {text:'Graphic Designing', key:'13'},
        {text:'Garden', key:'14'},
        {text:'Art Works', key:'15'},

    ])

  return (
    <View style={styles.container}>
      <FlatList
        data={things}
        renderItem={({item})=>(
            <View style={styles.flatListBox}>
                <Text style={{fontSize:20,fontWeight:`bold`,marginTop: 50,marginLeft:30}}>{item.text}</Text>
            </View>
            
        )}
      
      />

    </View>
  )
}

export default Tasks;

const styles = StyleSheet.create({
    container:{
        marginTop:2,
        
    },
    flatListBox:{
        marginVertical:15,
        marginHorizontal:15,
        borderWidth:1,
        borderColor:'#E8D1BA',
        borderRadius:15,
        width:354,
        height:128,
        backgroundColor:'#fbf9f7',
        
    },
    
})


