import React, { useEffect, useState } from 'react';

import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import auth from '../../Firebase/firebase.init';
import AuthContext from './AuthContext';
import axios from 'axios';

const provider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {


    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // create user
    const createUser =(email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // sign in user
    const signInUser = (email , password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    //sing in with google 
    const singWithGoogle =()=>{
        setLoading(true)
        return signInWithPopup(auth,provider)
    }
    // sing out user
    const singOutUser = ()=>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            console.log(currentUser)
            if(currentUser?.email){
                const user = {email: currentUser.email}
                axios.post("https://job-portal-project-server.vercel.app/jwt", user, {withCredentials: true})
                .then((res)=>{
                    console.log("login token",res.data)
                    // setLoading(true)
                })
            }else{
                axios.post('https://job-portal-project-server.vercel.app/logout', {}, {withCredentials: true})
                .then((res)=>{
                    console.log("logout token",res.data)
                    
                })
            }
            setLoading(false)
          
        })
        return ()=>{
            unsubscribe()
        }
    },[])



    const authInfo = {
        user, 
        loading,
        createUser,
        signInUser,
        singOutUser,
        singWithGoogle
    }



    return (
        <AuthContext.Provider value={authInfo}>
            { children }
        </AuthContext.Provider>
    );
};

export default AuthProvider;