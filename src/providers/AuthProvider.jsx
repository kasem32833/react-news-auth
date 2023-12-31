import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword} from "firebase/auth";
import app from "../firebase/firebase.config";
  
export const AuthContext  = createContext(null)

const auth = getAuth(app);


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null) 

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('User state changed', currentUser);
            setUser(currentUser);
        })
    },[])
    
    const loginUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    

    const authInfo = {
        user,
        createUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;