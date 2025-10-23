import React, { useEffect, useState } from 'react'
import { AuthContext } from './AuthContext'
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import { auth } from '../Firebase/Firebase.init'
const provider = new GoogleAuthProvider();

function AuthProvider({children}) {
    const [user, setUser] =useState(null);
    const [loading, setLoading]  = useState(true)

    // regiser 
    const creatUser = (email,password)=>{
        setLoading(true)
    return    createUserWithEmailAndPassword(auth,email,password)
    }

    // login ?
    const creatLoginuser = (email,password)=>{
        setLoading(true)
        return  signInWithEmailAndPassword(auth,email,password)
    }
    // lgoin with google 
    const googleLogin =()=>{
        setLoading(true)
        return signInWithPopup(auth,provider);
    }

    //logOut 
    const logOutuser =()=>{
        setLoading(true)
        return signOut(auth)
    }

    // set observer 
     useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentuser =>{
            console.log("privateUser", currentuser)
            setUser(currentuser)
            setLoading(false)
        })

        return()=>{
            unSubscribe();
        }
     },[])

    const userInfo={
        creatUser,
        creatLoginuser,
        user,
        logOutuser,
        loading,
        googleLogin,
    }

    

  return (
    <AuthContext.Provider value={userInfo} >
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider