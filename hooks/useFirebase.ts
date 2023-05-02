import { useCallback } from "react"
import { getFirestore, getDocs, collection, doc, updateDoc, addDoc, deleteDoc } from 'firebase/firestore'
import { firebaseApp } from "@/firebase-config"
import { getAuth, signInWithPhoneNumber, RecaptchaVerifier } from 'firebase/auth'

export function useFirebase() {
    const database = getFirestore(firebaseApp)

    const getData = useCallback(async (collectionName: string) => {
        const collectionRef = collection(database, collectionName)
        const dataDetails = await getDocs(collectionRef)
        return dataDetails.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    }, [database])

    const addData = useCallback(async (collectionName: string, data: unknown) => {
        const collectionRef = collection(database, collectionName)
        addDoc(collectionRef, data)
    }, [database])

    const deleteData = useCallback(async (collectionName: string, docId: string) => {
        const docRef = doc(database, collectionName, docId)
        deleteDoc(docRef)
    }, [database])

    const updateData = useCallback(async (collectionName: string, docId: string, updatedData: unknown) => {
        const docRef = doc(database, collectionName, docId)
        //@ts-ignore
        updateDoc(docRef, updatedData)
    }, [database])

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
        deleteData,
        updateData,
        auth,
        // onSignInSubmit
    }
}