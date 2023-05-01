import { useCallback } from "react"
import { getFirestore, getDocs, collection, doc, updateDoc, addDoc } from 'firebase/firestore'
import { firebaseApp } from "@/firebase-config"
import { getAuth, signInWithPhoneNumber, RecaptchaVerifier } from 'firebase/auth'

export function useFirebase() {

    const getData = useCallback(async (collectionName: string) => {
        const database = getFirestore(firebaseApp)
        const collectionRef = collection(database, collectionName)
        const dataDetails = await getDocs(collectionRef)
        return dataDetails.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    }, [])
    const addData = useCallback(async (collectionName: string, data: unknown) => {
        const database = getFirestore(firebaseApp)
        const collectionRef = collection(database, collectionName)
        addDoc(collectionRef, data)
        .then(() => {
            console.log('added')
        })
    }, [])

    const auth = getAuth(firebaseApp);

    const checkCode = useCallback(() => {
        // const auth = getAuth(firebaseApp)
        // // const appVerifer = window.rec
        // signInWithPhoneNumber(auth, '+37493604808', null)
        //     .then((res) => {
        //         console.log(res)
        //     })
        //     .catch((error) => console.log(error))
    }, [])

    return {
        getData,
        addData,
        checkCode,
        auth,
        // onSignInSubmit
    }
}