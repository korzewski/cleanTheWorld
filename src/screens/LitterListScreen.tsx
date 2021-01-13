import React from 'react'
import { View, Text } from 'react-native'
import LitterList from '../components/LitterList'
import s from '../styles/styles'

export default () => {
    return (
        <View style={styles.rootView}>
            <Text style={styles.header}>Litter list</Text>

            <LitterList />
        </View>
    )
}

const styles = s.create({
    rootView: {
        ...s.common.container,
    },
    header: {
        ...s.common.header,
    },
})