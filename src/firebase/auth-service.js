import { signInWithPopup, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { auth, googleProvider } from "./config"
import { createUserProfile } from "./users-service";

export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, googleProvider)
        console.log(result)
    } catch (error) {
        console.error(error);
        alert('No se pudo crear la cuenta, intentalo otra vez.')
        navigate('/')
    }
};

export const registerInWithEmailAndPassword = async ( email, password, extraData) => {
    try {
        const result = await createUserWithEmailAndPassword(auth, email, password)
        console.log(result)
        await createUserProfile(result.user.uid, {
            email, ...extraData
        })
    } catch (error) {
        console.log(error)
        alert('No se pudo crear la cuenta, intentalo otra vez.')
        navigate('/')
    }
};

{/*export const signInWithEmailAndPassword = async () => {};*/}

export const logout = async () => {
    try {
        await signOut(auth)
    } catch (error) {
        console.error({error})
    }
}