import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";


export function Location({latitude, longitude}) {
        const [url, setUrl] = useState(""); 
        const [userCityInput, setUserCityInput] = useState("");
        const [userCityAuto, setUserCityAuto] = useState("");
        const { error, isLoaded, items } = useFetch({
        url: `http://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=88bfcd2806bae8b88b443677fa94eb90`,
        dataKey: 0
    });
    useEffect(() => {
        if (items.length > 0){
        console.log(items);
        const firstItem = items[0];
        console.log(firstItem.name);
        setUserCityAuto(firstItem.name);
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
            <input className="bg-gray-600 rounded-2xl " name="city" 
            onChange={(e) => setUserCityInput(e.target.value)}></input>
            <div className="flex flex-col w-full">
            <span>Вы находитесь в:</span>
            <span>{userCityAuto}</span>
            </div>
        </div>
    );
}