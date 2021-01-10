import React from 'react'
import { Button } from 'react-native'
import { googleSignIn } from '../services/firebase'

export default function() {
    return (
        <Button
            title="Google Sign in"
            onPress={ googleSignIn }
        />
    );
}