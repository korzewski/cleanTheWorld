import * as React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { useStore, t } from '../store/translation'

export default () => {
    const store = useStore()

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Info screen</Text>
            
            <Text>lang: { store.state.language }</Text>
            <Text>exampleText: { t('exampleText') }</Text>
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