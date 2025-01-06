
import React from 'react';

import { TextInput, View, StyleSheet } from 'react-native';
import CustomText from './CustomText';



interface PhoneInputProps {

  onChangeText: (text: string) => void;

  value: string;

  onBlur?: () => void;

  onFocus?: () => void;

}



const PhoneInput: React.FC<PhoneInputProps> = ({ onChangeText, value ,onBlur,onFocus}) => {

  return (

    <View style={style.container }>
      <CustomText fontFamily='Medium' style={style.text}>
      🇮🇳+91
      </CustomText>
      <TextInput placeholder='0000000000' keyboardType='phone-pad' maxLength ={10}value={value} onChangeText={onChangeText} onFocus={onFocus} onBlur={onBlur} placeholderTextColor={'#ccc'} style={style.input}></TextInput>
    </View>

  )

};

const style=StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        gap:4,
        marginVertical:8,
        borderWidth:1,
        borderColor:'gray',
        borderRadius:4,
        paddingHorizontal:8,
    }
    ,input:{
        fontSize:16,
        fontFamily:'NotoSans-Medium',
        height:45,
        width:'90%',
        alignItems:'center',


    },text:{
        fontSize:16,
        top:-2,
        fontFamily:'NotoSans-Medium',
    }
 })


export default PhoneInput