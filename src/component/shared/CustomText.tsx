import { View, Text, StyleSheet } from 'react-native'
import React, { FC, ReactNode } from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen';

const fontsizes={h1:24,h2:20,h3:16,h4:14,h5:12,h6:10}
interface CustomTextProps {
    varient?: keyof typeof fontsizes;
    style?: object;
    fontFamily?: string;
    fontSize?: number;
    numberOfLines?: number;
    children?: ReactNode;
}

const CustomText: FC<CustomTextProps> = ({
    varient='h6',
    style,
    fontFamily='Regular',
    fontSize,
    numberOfLines,
    children,
}) => {
  return (
    <Text
      style={[
        styles.text,
        {
          fontSize: fontSize || fontsizes[varient],
          fontFamily: `Poppins-${fontFamily}`,
        },
        style,
      ]}
      numberOfLines={numberOfLines?numberOfLines:undefined}>
      {children}</Text>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: Colors.text,
    },
});

export default CustomText