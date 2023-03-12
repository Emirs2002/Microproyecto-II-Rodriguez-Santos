import { onAuthStateChanged } from "firebase/auth";
import React, { useContext, createContext, useEffect, useState } from "react";
import { auth } from "../firebase/config";
import { getUserProfile } from "../firebase/users-service";

export const UserContext = createContext(null)


export function UserContextProvider({ children }) {
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        onAuthStateChanged(auth, async (firebaseUser) => {
            if (firebaseUser) {
                setIsLoading(true)
                const profile = await getUserProfile(firebaseUser.email)
                setUser(profile)
            } else {
                setUser(null)
            }
            setIsLoading(false)
        })
    }, [])

    return (
        <UserContext.Provider value={{ user, isLoading, }}>
            {children}
        </UserContext.Provider>
    ) 
}

{/*EN la 1ra hora de prepa p1 hace lo de utilizar el usuario 
*/}

export function useUser() {
    return useContext(UserContext)
} 


