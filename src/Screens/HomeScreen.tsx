import * as React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { TBottomTabsProps } from '../types'

export default ({ navigation }: TBottomTabsProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home screen</Text>

            <Button
                title="Open info"
                onPress={() => navigation.navigate('InfoScreen')}
            />

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