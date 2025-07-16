import { useState, useEffect } from "react";

export const useFetch = (url) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        const abortController = new AbortController();
        
        const fetchData = async () => {
            try {
                const response = await fetch(url, { 
                    signal: abortController.signal 
                });
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                
                const result = await response.json();
                
                if (!result.drinks) {
                    throw new Error('No drinks property in response');
                }
                
                setItems(result.drinks);
                setIsLoaded(true);
            } catch (error) {
                if (error.name !== 'AbortError') {
                    setError(error);
                    setIsLoaded(true);
                }
            }
        };

        fetchData();

        return () => abortController.abort();
    }, [url]);  // Добавляем url в зависимости

    return { error, isLoaded, items };
};