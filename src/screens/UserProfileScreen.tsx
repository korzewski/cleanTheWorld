import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import UserProfile from '../components/UserProfile'

export default () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Info screen</Text>

            <UserProfile />
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