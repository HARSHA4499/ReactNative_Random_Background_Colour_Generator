

import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';




function App(): JSX.Element {

  const [randomBackground,setRandomBackground]=useState("#ffffff")
  const [randomColor1,setRandomColor1]=useState("#000000")
  const [randomColor2,setRandomColor2]=useState("#000000")
  const [randomColor3,setRandomColor3]=useState("#000000")
  const [randomColor4,setRandomColor4]=useState("#000000")

  const generateColor = () => {
    const hexRange = "0123456789ABCDEF"
    let color = "#"
    let color1="#"
    let color2="#"
    let color3="#"
    let color4="#"

    for (let i = 0; i < 6; i++) {
      color  += hexRange[Math.floor(Math.random() * 16)]
      color1 += hexRange[Math.floor(Math.random() * 16)]
      color2 += hexRange[Math.floor(Math.random() * 16)]
      color3 += hexRange[Math.floor(Math.random() * 16)]
      color4 += hexRange[Math.floor(Math.random() * 16)]
    }
    setRandomBackground(color)
    setRandomColor1(color1)
    setRandomColor2(color2)
    setRandomColor3(color3)
    setRandomColor4(color4)

  }
 
  return (
    <>
    <StatusBar backgroundColor={randomBackground}/>
    <View style={[styles.container,{backgroundColor:randomBackground}]}>
      <View style={styles.upperContainer}>
        <View style={[styles.square,{backgroundColor:randomColor1}]}/>
        <View style={[styles.circle,{backgroundColor:randomColor2}]}/>
      </View>
      <TouchableOpacity onPress={generateColor}>
        <View style={styles.actionButton}>
          <Text style={styles.actionButtonText}>
            Press Me
          </Text>
        </View>
      </TouchableOpacity>
      <View style={styles.lowerContainer}>
        <View style={[styles.rectangle,{backgroundColor:randomColor3}]}/>
        <View style={[styles.oval,{backgroundColor:randomColor4}]}/>
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  actionButton:{
    borderRadius:12,
    backgroundColor:"#6A1B4D",
    paddingVertical:10,
    paddingHorizontal:20,
    margin:50

  },
  actionButtonText:{
    fontSize:24,
    color:"#FFFFFF",
    textTransform:'uppercase'
  },
  upperContainer:{
    flex:0,
    flexDirection:'row-reverse',

  },
  lowerContainer:{
    flex:0,
    flexDirection:'column',
    padding:30

  },
  square:{
    width:100,
    height:100,
    margin:20,
    alignContent:'center',
    alignItems:'center'

  },
  circle:{
    width:100,
    height:100,
    borderRadius:100/2,
    margin:20,
    alignContent:'center',
    alignItems:'center'
    

  },
  rectangle:{
    width:200,
    height:100,
    margin:20,
    alignContent:'center',
    alignItems:'center'
  },
  oval:{
    width:100,
    height:100,
    borderRadius:50,
    transform:[{scaleX:2}],
    marginLeft:70,
    marginTop:30,
    alignContent:'center',
    alignItems:'center'

  }
});

export default App;
