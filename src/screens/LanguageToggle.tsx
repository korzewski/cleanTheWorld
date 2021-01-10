import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { useStore, t } from "../store/translation"
import UserProfile from '../components/UserProfile'

export default () => {
    const store = useStore()

    return (
        <View style={styles.container}>
            <Button
                title="Toggle language"
                onPress={ () => store.toggleLanguage() }
            />

            <Text style={styles.text}>{ t('exampleText') }</Text>

            <UserProfile />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
    },
    text: {
        color: '#333',
        textAlign: 'center',
    },
})