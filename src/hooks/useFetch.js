import { useState, useEffect } from 'react';

export const useFetch = (url) => {
    const [data, setData] = useState({});
    const [error, setError] = useState({}); 

    useEffect(() => {
        if (!url) return;

        (async () => {
           try {
            const response = await fetch(url);
            if (response.ok) {
                setData(await response.json());
            } else {
                throw new Error(response.status);
            }
           } catch (error) {
                setError(error);
           }
        })();
    }, [url]);

    return [data, error];
};