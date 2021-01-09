import { createState, useState } from '@hookstate/core'
import { ITranslationKeys } from './translation/_keys.d'
import pl from './translation/pl'
import en from './translation/en'

const translationKeys = {
    pl,
    en,
}

type TLanguage = keyof typeof translationKeys

const initialState = {
    language: 'pl' as TLanguage,
}

const store = createState(initialState)

export function useStore() {
    const withState = useState(store)

    return {
        get state() {
            return withState.get()
        },

        switchLanguage(language: TLanguage) {
            store.language.set(language)
        },

        toggleLanguage() {
            if (this.state.language == 'pl') {
                this.switchLanguage('en')
            } else {
                this.switchLanguage('pl')
            }
        }
    }
}

export function t(key: keyof ITranslationKeys) {
    const { language } = store.get()
    return translationKeys[language][key] || ''
}