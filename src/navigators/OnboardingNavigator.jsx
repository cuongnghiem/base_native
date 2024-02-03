import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Onboarding from '../screens/Onboarding'

const Stack = createNativeStackNavigator()
const Navigator = Stack.Navigator

const OnboardingNavigator = () => {
  return (
    <Navigator initialRouteName='onboarding_init' screenOptions={{
      headerShown:false
    }}>
        <Stack.Screen name='onboarding_init' component={Onboarding}/>
    </Navigator>
  )
}

export default OnboardingNavigator