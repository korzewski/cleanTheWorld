import { createState, useState } from '@hookstate/core'

const initialState = {
    firebase: undefined,
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