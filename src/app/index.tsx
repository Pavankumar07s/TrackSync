import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import { commonStyles } from '@/styles/commonStyles'
import { useFonts } from 'expo-font'
import { splashStyles } from '@/styles/splashStyles'
import CustomeText from '../component/shared/CustomText'
import { resetAndNavigate } from '@/utils/Helpers'
const Main = () => {
    const [loaded]=useFonts({ Bold: require('../assets/fonts/NotoSans-Bold.ttf'),Regular: require('../assets/fonts/NotoSans-Regular.ttf'),Medium: require('../assets/fonts/NotoSans-Medium.ttf') });


    const [hasNavigation, setHasNavigation] = React.useState(false);
    const tokenCheck=async()=>{resetAndNavigate('/role')};
    useEffect(() => {if(loaded && !hasNavigation){
        const timeOutId=setTimeout(() => {tokenCheck();setHasNavigation(true) }, 1000);
        return () => clearTimeout(timeOutId);
    }}, [loaded,hasNavigation]);
  return (
    <View style={commonStyles.container}>
        <Image source={require('@/assets/images/icon.png')} style={splashStyles.img} />
       <CustomeText varient='h5' fontFamily='Medium' style={splashStyles.text}>
        Made in Ait</CustomeText> 
    </View>
  )
}

export default Main