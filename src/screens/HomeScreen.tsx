import * as React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { useStore, t } from "../store/translation";

export default () => {
    const store = useStore()

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home screen !!!</Text>

            <Button
                title="Toggle language"
                onPress={ () => store.toggleLanguage() }
            />

            <Text style={styles.text}>{ t('exampleText') }</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: '#000',
    },
    text: {
        color: '#333',
        textAlign: 'center',
    },
})