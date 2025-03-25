import { createContext, useState, useEffect } from "react";
import { auth, db } from "../../lib/firebase/firebase";
import { 
    createUserWithEmailAndPassword, 
    GoogleAuthProvider, 
    signInWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged, 
    signInWithPopup, 
    sendPasswordResetEmail,
    updateProfile
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [ user, setUser ] = useState(null);
    const [ loading, setLoading ] = useState(true);

    const signUp = async (email, password, username) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(userCredential.user, {
                displayName: username
            });
            
            // Create user document in Firestore
            await setDoc(doc(db, "users", userCredential.user.uid), {
                email,
                username,
                createdAt: new Date(),
                purchases: []
            });

            return userCredential;
        } catch (error) {
            console.error("Error in signUp:", error);
            throw error;
        }
    }

    const signIn = async (email, password) => {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log("Signed in user:", userCredential.user);
        return userCredential;
    }

    const logOut = () => {
        return signOut(auth);
    }
    
    const signInWithGoogle = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider);
            // Check if user document exists, if not create one
            const userDoc = await getDoc(doc(db, "users", result.user.uid));
            if (!userDoc.exists()) {
                await setDoc(doc(db, "users", result.user.uid), {
                    email: result.user.email,
                    username: result.user.displayName,
                    createdAt: new Date(),
                    purchases: []
                });
            }
            return result;
        } catch (error) {
            console.error("Error in Google sign in:", error);
            throw error;
        }
    };
    
    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email);
    };

    // Add purchase to user's document
    const addPurchase = async (userId, purchaseData) => {
        try {
            const userRef = doc(db, "users", userId);
            const userDoc = await getDoc(userRef);
            
            if (userDoc.exists()) {
                const currentPurchases = userDoc.data().purchases || [];
                await setDoc(userRef, {
                    ...userDoc.data(),
                    purchases: [...currentPurchases, {
                        ...purchaseData,
                        purchaseDate: new Date()
                    }]
                });
            }
        } catch (error) {
            console.error("Error adding purchase:", error);
            throw error;
        }
    };

    // Get user's purchases
    const getUserPurchases = async (userId) => {
        try {
            const userDoc = await getDoc(doc(db, "users", userId));
            if(userDoc.exists()){
                return userDoc.data().purchases || [];
            }
            return [];
        } catch(error){
            console.error("Error getting purchases:", error);
            throw error;
        }
    }
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })
        return unsubscribe;
    }, []);

    const value = {
        user,
        loading,
        signUp,
        signIn,
        logOut,
        signInWithGoogle,
        resetPassword,
        addPurchase,
        getUserPurchases
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}