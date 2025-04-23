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
    const [ currentUser, setCurrentUser ] = useState(null);
    const [ isAdmin, setIsAdmin ] = useState(false);
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if(user){
                const userDoc = await getDoc(doc(db, "users", user.uid));
                const userData = userDoc.data();
                setIsAdmin(userData?.role === "admin");
                setCurrentUser(user);
            } else {
                setCurrentUser(null);
                setIsAdmin(false);
            }
            setLoading(false);
        });
        return unsubscribe;
    }, []);

    const signUp = async (email, password, username) => {
        try {
            // Create the user
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            
            // Update profile with username
            await updateProfile(userCredential.user, {
                displayName: username 
            });
            
            // Create user document in Firestore 
            await setDoc(doc(db, "users", userCredential.user.uid), {
                email,
                username,
                createdAt: new Date(),
                authProvider: 'email',
                role: 'user',
                purchases: [],
                verified: "false"
            });
    
            return userCredential;
        } catch (error) {
            // Handle specific Firebase auth errors
            switch (error.code) {
                case 'auth/email-already-in-use':
                    throw new Error('This email is already registered. Please try other email.');
                case 'auth/invalid-email':
                    throw new Error('Invalid email address.');
                case 'auth/operation-not-allowed':
                    throw new Error('Email/password accounts are not enabled. Please contact support.');
                case 'auth/weak-password':
                    throw new Error('Password is too weak. Please choose a stronger password.');
                default:
                    console.error("Error in sign up:", error);
                    throw new Error('Failed to create account. Please try again.');
            }
        }
    };

    const signIn = async (email, password) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            return userCredential;
        } catch (error) {
            switch (error.code) {
                case 'auth/user-not-found':
                    throw new Error('No account found with this email.');
                case 'auth/wrong-password':
                    throw new Error('Incorrect password.');
                case 'auth/invalid-email':
                    throw new Error('Invalid email address.');
                default:
                    throw new Error('Failed to sign in. Please try again.');
            }
        }
    };

    const signInWithGoogle = async () => {
        try {
            const provider = new GoogleAuthProvider();
            provider.addScope('profile');
            provider.addScope('email');
            
            const result = await signInWithPopup(auth, provider);
            
            // Create or update user document
            const userRef = doc(db, "users", result.user.uid);
            const userSnap = await getDoc(userRef);
            
            if (!userSnap.exists()) {
                await setDoc(userRef, {
                    email: result.user.email,
                    username: result.user.displayName,
                    createdAt: new Date(),
                    authProvider: 'google',
                    role: 'user',
                    isVerified: "false"
                });
            }
            
            return result;
        } catch (error) {
            switch (error.code) {
                case 'auth/popup-closed-by-user':
                    throw new Error('Sign-in popup was closed. Please try again.');
                case 'auth/cancelled-popup-request':
                    throw new Error('Another popup is already open.');
                case 'auth/account-exists-with-different-credential':
                    throw new Error('An account already exists with this email using a different sign-in method.');
                default:
                    console.error("Google sign in error:", error);
                    throw new Error('Failed to sign in with Google. Please try again.');
            }
        }
    }; 
    
    const logOut = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.error("Logout error:", error);
            throw new Error('Failed to log out. Please try again.');
        }
    };
    
    const resetPassword = async (email) => {
        try {
            await sendPasswordResetEmail(auth, email);
        } catch (error) {
            switch (error.code) {
                case 'auth/user-not-found':
                    throw new Error('No account found with this email.');
                case 'auth/invalid-email':
                    throw new Error('Invalid email address.');
                default:
                    throw new Error('Failed to send password reset email. Please try again.');
            }
        }
    };

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
            } else {
                throw new Error('User document not found');
            }
        } catch (error) {
            console.error("Error adding purchase:", error);
            throw new Error('Failed to add purchase. Please try again.');
        }
    };

    const getUserPurchases = async (userId) => {
        try {
            const userDoc = await getDoc(doc(db, "users", userId));
            if(userDoc.exists()){
                return userDoc.data().purchases || [];
            }
            return [];
        } catch(error){
            console.error("Error getting purchases:", error);
            throw new Error('Failed to fetch purchases. Please try again.');
        }
    };

    const value = {
        currentUser,
        isAdmin,
        loading,
        signUp,
        signIn,
        logOut,
        signInWithGoogle,
        resetPassword,
        addPurchase,
        getUserPurchases
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};