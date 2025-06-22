import React, { createContext, use, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth/web-extension';

export const AuthContext=createContext(null)
const auth=getAuth(app)
const googleProvider=new GoogleAuthProvider()

const AuthProvider = ({children}) => {

    const[user,setUser]=useState(null)
    const[loading,setLoading]=useState(true)

    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)

    }

    const signIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const signInWithGoogle=()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const logOut=async()=>{
        setLoading(true)
        //    const{data}= await axios('https://solosphere-server-three.vercel.app/logout' ,{withCredentials: true})
        
        return signOut(auth)
    }

    
  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
}

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth, 
            createUser=>{
                setUser(createUser)
                console.log('currentuser--->', createUser);
                setLoading(false)
                
            }
        )

        return ()=>{
            return unsubscribe()
        }
    }, [])


 

    const authInfo={
        user,
        setUser,
        loading,
        setLoading,
        createUser,
        signIn,
        updateUserProfile,
        
        signInWithGoogle,
        logOut

    }

    return (
     <AuthContext.Provider value={authInfo}>
        {children}
     </AuthContext.Provider>
    );
};

export default AuthProvider;