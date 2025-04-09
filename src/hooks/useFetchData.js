import { useState, useEffect } from 'react'
import { db } from "../lib/firebase/firebase"
import {getDocs, collection, doc, updateDoc} from 'firebase/firestore'

export const useFetchData = (collectionName) => {
    const [ data, setData ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(null); 


    useEffect(() => {
        const fetchData = async() => {
            try {
                const dataRef = collection(db, collectionName);
                const snapShot = await getDocs(dataRef); 
                const fetchedData = snapShot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setData(fetchedData);
                } catch (error){
                    setError(error.message);
                    console.error("Error fetching data: ", error);
              } finally {
                setLoading(false);
              }
            };
            fetchData();
        }, [collectionName]);
        
        return { data, loading, error };
    }