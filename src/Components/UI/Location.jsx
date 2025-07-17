import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";


export function Location({userCity, setUserCity, latitude, longitude}) {
        const [url, setUrl] = useState(""); 
        const [userCityAuto, setUserCityAuto] = useState("");
        const { error, isLoaded, items } = useFetch({
        url: `http://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=88bfcd2806bae8b88b443677fa94eb90`
    });
    useEffect(() => {
        if (items.length > 0){
        console.log(items);
        const firstItem = items[0];
        console.log(firstItem.name);
        setUserCity(firstItem.name);
    }
    }, [items])

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!isLoaded) {
        return <div>Loading...</div>;
    }

    return (
        <div className="">
            <div className="flex flex-col w-full">
            <span>Выбранная локация:</span>
            <span>{userCity}</span>
            </div>
        </div>
    );
}