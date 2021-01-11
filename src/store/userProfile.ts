import { createState, useState } from '@hookstate/core'
import { FirebaseAuthTypes } from '@react-native-firebase/auth'

const initialState = {
    firebase: null as FirebaseAuthTypes.User | null,
} 

const store = createState(initialState)

export function useStore() {
    const withState = useState(store)

    return {
        get state() {
            return withState.get()
        },

        get isAuthenticated() {
            return !!this.state.firebase
        },

        setUserProfile(user: any) {
            store.firebase.set(user)
        },
    }
}