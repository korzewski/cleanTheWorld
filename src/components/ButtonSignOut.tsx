import React from 'react'
import { Button } from 'react-native'
import { signOut } from '../services/firebase'

export default function() {
    return (
        <Button
            title="Sign Out"
            onPress={ signOut }
        />
    );
}