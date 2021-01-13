import React from 'react'
import { View, FlatList } from 'react-native'
import { ILitterData }  from '../../functions/src/litter/litter.d'
import LitterListItem from './LitterListItem'
import s from '../styles/styles'

const litterData: ILitterData = {
    'x001': {
        litterPhotoUrl: 'https://www.wesa.fm/sites/wesa/files/styles/x_large/public/202002/trash.jpg',
        location: {
            latidute: '50.1',
            longitude: '50.5',
        },
        publishDate: 1610565861859,
        uid: 'userId-1asfklhejafjhje',
        userAvatarUrl: 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png'
    },
    'x002': {
        litterPhotoUrl: 'https://i2-prod.walesonline.co.uk/incoming/article18607557.ece/ALTERNATES/s1200c/0_Deposit-return-scheme-call.jpg',
        location: {
            latidute: '60.1',
            longitude: '40.5',
        },
        publishDate: 1610566020227,
        uid: 'userId-2asfklhejafjhje',
        userAvatarUrl: 'https://cdn.iconscout.com/icon/free/png-256/avatar-380-456332.png',
    },
    'x003': {
        litterPhotoUrl: 'https://www.wesa.fm/sites/wesa/files/styles/x_large/public/202002/trash.jpg',
        location: {
            latidute: '50.1',
            longitude: '50.5',
        },
        publishDate: 1610565861859,
        uid: 'userId-1asfklhejafjhje',
        userAvatarUrl: 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png'
    },
    'x004': {
        litterPhotoUrl: 'https://i2-prod.walesonline.co.uk/incoming/article18607557.ece/ALTERNATES/s1200c/0_Deposit-return-scheme-call.jpg',
        location: {
            latidute: '60.1',
            longitude: '40.5',
        },
        publishDate: 1610566020227,
        uid: 'userId-2asfklhejafjhje',
        userAvatarUrl: 'https://cdn.iconscout.com/icon/free/png-256/avatar-380-456332.png',
    },
    'x005': {
        litterPhotoUrl: 'https://www.wesa.fm/sites/wesa/files/styles/x_large/public/202002/trash.jpg',
        location: {
            latidute: '50.1',
            longitude: '50.5',
        },
        publishDate: 1610565861859,
        uid: 'userId-1asfklhejafjhje',
        userAvatarUrl: 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png'
    },
    'x006': {
        litterPhotoUrl: 'https://i2-prod.walesonline.co.uk/incoming/article18607557.ece/ALTERNATES/s1200c/0_Deposit-return-scheme-call.jpg',
        location: {
            latidute: '60.1',
            longitude: '40.5',
        },
        publishDate: 1610566020227,
        uid: 'userId-2asfklhejafjhje',
        userAvatarUrl: 'https://cdn.iconscout.com/icon/free/png-256/avatar-380-456332.png',
    },
}

function mapLitterData(object: ILitterData) {
    return Object.keys(object).map(key => {
        const litterItem = litterData[key]
        return {
            id: key,
            ...litterItem,
        }
    })
}

export default () => {
    function renderItem({ item }: { item: ReturnType<typeof mapLitterData>[number] }) {
        return <LitterListItem litterItem={item} />
    }

    return (
        <View style={styles.rootView}>
            <FlatList 
                style={styles.flatList}
                data={mapLitterData(litterData)}
                renderItem={renderItem}
            />
        </View>
    )
}

const styles = s.create({
    rootView: {
        
    },
    flatList: {
        padding: s.values.spacing,
    },
})
