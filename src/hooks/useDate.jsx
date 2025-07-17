import { useEffect, useState } from "react";

export function useDate(updateInterval = 1000) {
    const [date, setDate] = useState(new Date());
    useEffect(() => {
        const timer = setInterval(() =>{
            setImmediate(new Date());
        }, updateInterval);
        
    }, [updateInterval])
    return date;
}