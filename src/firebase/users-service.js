import { async } from "@firebase/util"
import { data } from "autoprefixer"
import {doc, setDoc} from "firebase/firestore"
import { db } from "./config"

export async function createUserProfile(userId, userData){
    return setDoc(doc(db, 'users', userId), data)
    

}