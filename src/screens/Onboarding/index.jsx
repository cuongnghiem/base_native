import React from 'react'
import {View, StyleSheet, Text} from 'react-native'
import {colors} from '../../configs/Color'

const Onboarding = () => {
    return (
        <View style={{...styles.container, backgroundColor: 'white'}}>
            <Text>Hello World!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Onboarding
