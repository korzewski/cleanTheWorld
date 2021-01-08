import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { routes } from './consts'
import HomeScreen from './Screens/HomeScreen'
import InfoScreen from './Screens/InfoScreen'

const Tab = createBottomTabNavigator()

export default () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name={routes.homeScreen} component={HomeScreen} />
                <Tab.Screen name={routes.infoScreen} component={InfoScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}