import React from 'react'
import { Button } from 'react-native'
import { anonymousSignIn } from '../services/firebase'

export default function() {
    return (
        <Button
            title="Anonymous Sign in"
            onPress={ anonymousSignIn }
        />
    );
}