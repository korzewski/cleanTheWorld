import React from 'react'
import { View, Text, Image, StyleSheet, FlexStyle } from 'react-native'
import { ILitterData }  from '../../functions/src/litter/litter.d'
import s from '../styles/styles'

export default ({ litterItem }: { litterItem: ILitterData[string] }) => {
    return (
        <View style={styles.rootView}>
            <View style={styles.displayInRow}>
                <Image
                    source={{ uri: litterItem.userAvatarUrl }}
                    style={[styles.avatarImage]}
                />

                <View style={styles.publishedView}>
                    <Text>published: {new Date(litterItem.publishDate).toString()}</Text>
                </View>
            </View>

            <View>
                <View style={styles.locationView}>
                    <Text style={styles.locationText}>location: {litterItem.location.latidute}, {litterItem.location.longitude}</Text>
                </View>

                <View style={styles.litterView}>
                    <Image
                        source={{ uri: litterItem.litterPhotoUrl }}
                        style={[styles.litterImage]}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = s.create({
    rootView: {
        borderWidth: 1,
        borderColor: '#333',
        marginBottom: 50,
    },

    avatarView: {

    },
    avatarImage: {
        width: 50,
        height: 50,
    },

    litterView: {

    },
    litterImage: {
        flex: 1,
        height: 300,
    },

    displayInRow: {
        flexDirection: 'row',
    },
    
    publishedView: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: s.values.spacing,
    },
    
    locationView: {
        marginVertical: s.values.spacing,
    },
    locationText: {
        textAlign: 'center',
    },
})