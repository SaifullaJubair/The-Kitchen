import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
export const AuthContext = createContext()
const auth = getAuth(app)


const AuthProvider = ({ children }) => {

   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);

   const createUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);

   }
   //google SignIn
   const googleProvider = new GoogleAuthProvider()
   const signInWithGoogle = () => {
      return signInWithPopup(auth, googleProvider)
   }

   //email login
   const signIn = (email, password) => {
      setLoading(true)
      return signInWithEmailAndPassword(auth, email, password)
   }

   //verify email
   const verifyEmail = () => {
      return sendEmailVerification(auth.currentUser);
   }

   const updateUserProfile = (profile) => {
      return updateProfile(auth.currentUser, profile)
   }

   const logOut = () => {
      setLoading(true)
      return signOut(auth)
   }




   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, currentUser => {
         console.log('user inside state change', currentUser)
         setUser(currentUser);
         setLoading(false)
      })
      return () => {
         unsubscribe();
      }
   }, [])


   const authInfo = { user, createUser, signIn, signInWithGoogle, logOut, loading, updateUserProfile, verifyEmail }
   return (
      <div>
         <AuthContext.Provider value={authInfo}>
            {children}
         </AuthContext.Provider>
      </div>
   );
};

export default AuthProvider;