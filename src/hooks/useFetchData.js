import { useState, useEffect } from 'react'
import { db } from "../lib/firebase/firebase"
import { collection, onSnapshot } from 'firebase/firestore'

export const useFetchData = (collectionName) => {
    const [ data, setData ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(null); 

    useEffect(() => {
        // If no collection name is provided, return empty data
        if (!collectionName) {
            setData([]);
            setLoading(false);
            return;
        }

        // Create reference to the collection
        const dataRef = collection(db , collectionName);
        
        // Set up real-time listener
        const unsubscribe = onSnapshot(dataRef, 
            (snapshot) => {
                const fetchedData = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setData(fetchedData);
                setLoading(false);
            },
            (error) => {
                setError(error.message);
                console.error("Error fetching data: ", error);
                setLoading(false);
            }
        );

        // Cleanup subscription
        return () => unsubscribe();
    }, [collectionName]);
    
    return { data, loading, error };
}