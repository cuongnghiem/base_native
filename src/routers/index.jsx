import {
    NavigationContainer,
    createNavigationContainerRef,
} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import React from 'react'
import OnboardingNavigator from '../navigators/OnboardingNavigator'
import NavId from '../configs/NavId'

const Stack = createNativeStackNavigator()
export const navigationRef = createNavigationContainerRef()

const Routers = () => {

    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                    gestureEnabled: false
                }}
            >
                <Stack.Screen name={NavId.onboarding.main} component={OnboardingNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routers
