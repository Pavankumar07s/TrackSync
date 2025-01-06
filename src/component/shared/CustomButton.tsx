import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native'
import React,{FC} from 'react'
import { Touchable } from 'react-native'
import { Colors } from '@/utils/Constants'
import CustomText from './CustomText'
import { RFValue } from 'react-native-responsive-fontsize'

const CustomButton :FC<CustomButtonProps>= ({onPress,title,disabled,loading}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8} style={[
      style.container,{
        backgroundColor:disabled?Colors.secondary:Colors.primary
      }
    ]}>
      {loading?<ActivityIndicator color={Colors.text} size={'small'}/>:<CustomText fontFamily='semiBold' style={ {fontSize:RFValue(12) ,color:disabled?'#fff':Colors.text}}>{title}</CustomText>
      }
    </TouchableOpacity>
  )
}
const style=StyleSheet.create({
  container:{
    borderRadius:10,
    margin: 10,
    padding:10,
    height:42,
    justifyContent:'center',
    alignItems:'center',
    width:'90%'
  }
})
export default CustomButton