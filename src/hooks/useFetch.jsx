import { useState, useEffect } from 'react';

export const useFetch = ({ url, dataKey = 0 }) => {
    const [state, setState] = useState({
        items: [],
        isLoaded: false,
        error: null
    });

    useEffect(() => {
        const abortController = new AbortController();

        setState(prev => ({ ...prev, isLoaded: false, error: null }));

        fetch(url, { signal: abortController.signal })
            .then(response => {
                if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
                return response.json();
            })
            .then(data => {
                if (abortController.signal.aborted) return;
                
                const result = data[dataKey] ?? data;
                setState({
                    items: Array.isArray(result) ? result : [result],
                    isLoaded: true,
                    error: null
                });
            })
            .catch(error => {
                if (error.name !== 'AbortError') {
                    setState({
                        items: [],
                        isLoaded: true,
                        error: error.message
                    });
                }
            });

        return () => abortController.abort();
    }, [url, dataKey]);

    return state;
};