import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import UserProfileScreen from './UserProfileScreen'
import LanguageToggle from './LanguageToggle'
import { routes } from '../consts'

const Tab = createBottomTabNavigator()

export default () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name={routes.languageToggle} component={LanguageToggle} />
            <Tab.Screen name={routes.userProfileScreen} component={UserProfileScreen} />
        </Tab.Navigator>
    )
}