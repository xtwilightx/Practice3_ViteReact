import { useState, useEffect } from "react";

export const useFetch = (url) => {
    const [error,setError] = useState(null)
    const [isLoaded,setIsLoaded] = useState(false)
    const [items,setItems] = useState([])

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(true);
                }
            )
    }, [url])

    
    if (error) return <div>error</div>
    else if (!isLoaded) return <div>Loading...</div> 
    
    else return <>
    <div className="size-6">
        <ul>
            {items.map((items) => (
                <li key={items.name}>{items.name}</li>
            ))}


        </ul>

    </div>
    </>

}