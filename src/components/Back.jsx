import React from 'react'
import {Pressable, Text} from 'react-native'
import BackIcon from '../assets/icons/back_icon.svg'
import {View} from 'react-native'
import {useNavigation} from '@react-navigation/native'

const Back = ({text, styles, textStyles, hiddenBtn, onPress}) => {
    const navigation = useNavigation()

    return (
        <View style={{...(text ? {flexDirection: 'row', alignItems: 'center'} : {}), ...styles}}>
            {!hiddenBtn ? (
                <Pressable
                    onPress={() => {
                        if (onPress) return onPress()
                        navigation.goBack()
                    }}
                >
                    <BackIcon width={30} height={30} />
                </Pressable>
            ) : null}
            <Text
                style={{
                    fontSize: 15,
                    fontWeight: '600',
                    marginLeft: !hiddenBtn ? 5 : 0,
                    ...textStyles
                }}
            >
                {text}
            </Text>
        </View>
    )
}

export default Back
