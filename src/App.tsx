import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import auth from '@react-native-firebase/auth'
import { routes } from './consts'
import HomeScreen from './screens/HomeScreen'
import AuthenticationScreen from './screens/AuthenticationScreen'
import { useStore } from './store/userProfile'

import { firebaseInit } from './services/firebase'
firebaseInit()

const Stack = createStackNavigator()

export default () => {
    const store = useStore()

    function onAuthStateChanged(user: any) {
        store.setUserProfile(user)
    }
    
    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;
    });
    
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name={routes.authenticationScreen} component={AuthenticationScreen} />
                <Stack.Screen name={routes.homeScreen} component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}