import React from 'react'
import {View, TextInput, StyleSheet, Pressable} from 'react-native'
import {hp, wp} from '../systems/ResponsiveWidthHeight'
import {colors} from '../configs/Color'
import {useState} from 'react'

const Input = ({
    Icon,
    width = 90,
    height = 50,
    placeholder,
    onchange = () => {},
    notActive = false,
    notIcon,
    EndIcon,
    onEndIconPress = () => {},
    ...restProps
}) => {
    const [active, setActive] = useState(false)

    return (
        <View
            style={{
                borderColor: active ? colors.main : 'transparent',
                borderWidth: 1,
                borderRadius: 10,
                backgroundColor: active ? colors.mainOpacity : '#f5f5f5',
                alignItems: 'center',
                flexDirection: 'row',
                paddingLeft: notIcon ? 5 : 15,
                paddingRight: 15
            }}
        >
            {Icon ? <Icon width={18} height={18} /> : null}
            <TextInput
                onFocus={() => setActive(!notActive ? true : false)}
                onBlur={() => setActive(false)}
                style={{width: wp(width), height, ...styles.input, flex: 1}}
                placeholder={placeholder}
                onChangeText={text => {
                    onchange(text)
                }}
                {...restProps}
            />
            {EndIcon ? (
                <Pressable onPress={onEndIconPress}>
                    <EndIcon width={18} height={18} />
                </Pressable>
            ) : null}
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        paddingLeft: 8
    }
})

export default Input
