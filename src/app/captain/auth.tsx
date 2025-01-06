import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { authStyles } from '@/styles/authStyles';
import { commonStyles } from '@/styles/commonStyles';
import CustomText from '@/component/shared/CustomText';
import CustomButton from '../../component/shared/CustomButton';
import PhoneInput from '@/component/shared/PhoneInput';
import { resetAndNavigate } from '@/utils/Helpers';

const Auth = () => {
    const[phone, setPhone] = React.useState('');

    const handleText = async() => {
        resetAndNavigate('/captain/home')
    };
    
  return (
   <SafeAreaView style={authStyles.container}>
    <ScrollView contentContainerStyle={authStyles.container}>
        <View style={commonStyles.flexRowBetween}>
            <Image source={require('@/assets/images/captain_logo.png')} style={authStyles.logo}></Image>
            <TouchableOpacity style={authStyles.flexRowGap}>
                <MaterialIcons name="help" size={18} color='grey'></MaterialIcons>
                <CustomText fontFamily='Medium' varient='h5'>Help</CustomText>
            </TouchableOpacity>
        </View>
        <CustomText fontFamily='Medium' style={commonStyles.lightText}>Good to see you captain!</CustomText>
        <CustomText fontFamily='Regular' varient='h3'>Enter your mobile number</CustomText>
        <PhoneInput onChangeText={setPhone} value={phone}></PhoneInput>
        
        <View style={authStyles.footerContainer}>
            <CustomText fontFamily='Regular' style={[commonStyles.lightText,{textAlign:'center',marginHorizontal:'20'}]}>
                By continuing ,you agree the term and conditions of ""
            </CustomText>
            <CustomButton title="Next" onPress={handleText} loading={false} disabled={false}>

            </CustomButton>
        </View>
    </ScrollView>
   </SafeAreaView>
  )
}

export default Auth