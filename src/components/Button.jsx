import React from 'react'
import {Text, TouchableOpacity, View} from 'react-native'
import {colors} from '../configs/Color'
import {wp} from '../systems/ResponsiveWidthHeight'

const Button = ({
    width = 90,
    height = 50,
    onPress = () => {},
    backgroundColor = colors.main,
    textColor = '#fff',
    styles = {},
    stylesText = {},
    text
}) => {
    return (
        <View style={{width: wp(100), alignItems: 'center', ...styles}}>
            <TouchableOpacity
                style={{
                    backgroundColor,
                    width: wp(width),
                    height,
                    borderRadius: 100,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                onPress={onPress}
            >
                <Text style={{color: textColor, fontSize: 16, fontWeight: '600', ...stylesText}}>{text}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Button
