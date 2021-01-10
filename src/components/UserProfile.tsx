import React from 'react';
import { View, Text } from 'react-native';
import { useStore } from '../store/userProfile'
import { t } from '../store/translation'
import ButtonSignOut from '../components/ButtonSignOut'
import ButtonGoogleSignIn from '../components/ButtonGoogleSignIn'

export default function AuthState() {
    const store = useStore()

    if (!store.isAuthenticated) {
        return (
            <View>
                <Text>{ t('userProfileSignInText') }</Text>

                <ButtonGoogleSignIn />
            </View>
        );
    }

    return (
        <View>
            <Text>User profile</Text>
            <Text>Logged in {store.state.firebase.email}</Text>

            <ButtonSignOut />
        </View>
    );
}