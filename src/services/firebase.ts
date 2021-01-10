import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-community/google-signin';

export function firebaseInit() {
    GoogleSignin.configure({
        webClientId: '422665039645-ue4fu98iran1ecvfv4f3sgghej62kl8h.apps.googleusercontent.com',
    });
}

export async function googleSignIn() {
    const { idToken } = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    return auth().signInWithCredential(googleCredential);
}

export async function signOut() {
    await GoogleSignin.signOut()
    return auth().signOut()
}

export function getCurrentUser() {
    return auth().currentUser
}