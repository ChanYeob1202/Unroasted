import { useState, useEffect } from 'react';

/**
 * Custom hook for fetching data from REST APIs (e.g., Strapi)
 * 
 * @param {string} url - The API endpoint URL
 * @param {object} options - Optional fetch options (method, headers, etc.)
 * @param {array} dependencies - Array of dependencies to trigger refetch (default: [])
 * @param {function} transform - Optional function to transform the response data
 * @returns {object} { data, loading, error, refetch }
 * 
 * @example
 * // Basic usage
 * const { data, loading, error } = useFetchApi('http://localhost:1337/api/articles');
 * 
 * @example
 * // With dependencies
 * const { data, loading, error } = useFetchApi(
 *   `http://localhost:1337/api/articles?filters[slug][$eq]=${slug}`,
 *   {},
 *   [slug]
 * );
 * 
 * @example
 * // With transform function
 * const { data, loading, error } = useFetchApi(
 *   'http://localhost:1337/api/articles',
 *   {},
 *   [],
 *   (result) => result.data || []
 * );
 */
export function useFetchApi(url, options = {}, dependencies = [], transform = null) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    if (!url) {
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const response = await fetch(url, {
        ...options,
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      
      // Apply transform function if provided, otherwise use result directly
      const transformedData = transform ? transform(result) : result;
      setData(transformedData);
    } catch (err) {
      console.error('Error fetching data:', err);
      setError(err.message || 'An error occurred while fetching data');
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, ...dependencies]);

  return { data, loading, error, refetch: fetchData };
}

