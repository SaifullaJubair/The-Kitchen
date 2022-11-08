import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
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
   const provider = new GoogleAuthProvider()
   const signInGoogle = () => {
      setLoading(true)
      return signInWithPopup(auth, provider)
   }
   //email login
   const signIn = (email, password) => {
      setLoading(true)
      return signInWithEmailAndPassword(auth, email, password)
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


   const authInfo =
   {
      user,
      createUser,
      signIn,
      signInGoogle,
      logOut,
      loading,
      updateUserProfile
   }
   return (
      <div>
         <AuthContext.Provider value={authInfo}>
            {children}
         </AuthContext.Provider>
      </div>
   );
};

export default AuthProvider;