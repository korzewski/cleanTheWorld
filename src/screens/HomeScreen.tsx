import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import UserProfileScreen from './UserProfileScreen'
import LitterListScreen from './LitterListScreen'
import { routes } from '../consts'

const Tab = createBottomTabNavigator()

export default () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name={routes.litterListScreen} component={LitterListScreen} />
            <Tab.Screen name={routes.userProfileScreen} component={UserProfileScreen} />
        </Tab.Navigator>
    )
}