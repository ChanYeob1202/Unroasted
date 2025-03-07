import { useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import { db } from '../lib/firebase/firebase';
import { doc, getDoc } from 'firebase/firestore';

function TestDatabase() {
    const { user } = useAuth();
    useEffect(() => {
        const checkDatabase = async () => {
            if (user) {
                try {
                    const userRef = doc(db, "users", user.uid);
                    const userDoc = await getDoc(userRef);
                    
                    if (userDoc.exists()) {
                        console.log("User data:", userDoc.data());
                    } else {
                        console.log("No user document found!");
                    }
                } catch (error) {
                    console.error("Error:", error);
                }
            }
        };

        checkDatabase();
    }, [user]);

    return (
        <div>
            <h2>Testing Database Connection</h2>
            <p>Check console for results</p>
            {user && <p>Current User ID: {user.uid}</p>}
        </div>
    );
}

export default TestDatabase; 