import { StyleSheet } from 'react-native'

export const values = {
    spacing: 15,
} as const

const common = {
    container: {
        flex: 1,
    },
    header: {
        fontSize: 36,
        fontWeight: 'bold',
        padding: values.spacing,
    },
} as const

export default {
    create: (data: StyleSheet.NamedStyles<any>) => StyleSheet.create(data),
    common,
    values,
}