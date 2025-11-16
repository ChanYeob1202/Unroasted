import { useState, useEffect } from 'react';
import { collection, doc, getDoc, getDocs, query } from 'firebase/firestore';
import { db } from '../lib/firebase/firebase';

/**
 * Custom hook for fetching data from Firebase Firestore
 * Supports both single document and collection queries
 * 
 * @param {string|object} collectionPath - Collection path (e.g., "community_posts") or query object
 * @param {string} documentId - Optional document ID for single document fetch
 * @param {array} queryConstraints - Optional Firestore query constraints (orderBy, limit, where, etc.)
 * @param {array} dependencies - Array of dependencies to trigger refetch (default: [])
 * @param {function} transform - Optional function to transform the fetched data
 * @returns {object} { data, loading, error, refetch }
 * 
 * @example
 * // Fetch a single document
 * const { data, loading, error } = useFetchFirestore('community_posts', postId);
 * 
 * @example
 * 
 * // Fetch a collection with query constraints
 * const { data, loading, error } = useFetchFirestore(
 *   'community_posts',
 *   null,
 *   [orderBy('createdAt', 'desc'), limit(20)]
 * );
 * 
 * @example
 * // With dependencies
 * const { data, loading, error } = useFetchFirestore(
 *   'community_posts',
 *   postId,
 *   [],
 *   [postId]
 * );
 */

export function useFetchFirestore(
  collectionPath,
  documentId = null,
  queryConstraints = [],
  dependencies = [],
  transform = null
) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    if (!collectionPath) {
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);
      let result;
      if (documentId) {
        // Fetch a single document
        const docRef = doc(db, collectionPath, documentId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          result = {
            id: docSnap.id,
            ...docSnap.data(),
          };
        } else {
          result = null;
        }
      } else {
        // Fetch a collection
        const collectionRef = collection(db, collectionPath);
        
        // Apply query constraints if provided
        const q = queryConstraints.length > 0
          ? query(collectionRef, ...queryConstraints)
          : collectionRef;

        const querySnapshot = await getDocs(q);
        result = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
      }

      // Apply transform function if provided
      const transformedData = transform ? transform(result) : result;
      setData(transformedData);
    } catch (err) {
      console.error('Error fetching Firestore data:', err);
      setError(err.message || 'An error occurred while fetching data');
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collectionPath, documentId, ...dependencies]);

  return { data, loading, error, refetch: fetchData };
}

