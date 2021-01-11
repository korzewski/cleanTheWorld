import React, { useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useStore } from '../store/userProfile'
import ButtonGoogleSignIn from '../components/ButtonGoogleSignIn'
import ButtonAnonymousSignIn from '../components/ButtonAnonymousSignIn'
import { TScreenProps } from '../types'
import { routes } from '../consts'

export default ({ navigation }: TScreenProps) => {
    const store = useStore()

    useEffect(() => {
        if (store.isAuthenticated) {
            navigation.replace(routes.homeScreen)
        }
    })

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Authenticate</Text>

            <ButtonGoogleSignIn />
            <ButtonAnonymousSignIn />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: '#ddd',
    },
    text: {
        color: '#333',
        textAlign: 'center',
    },
})