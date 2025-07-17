import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { loadConfigFromFile } from "vite";

export function Weather({latitude, longitude}) {

        const now = new Date()

        // const localTime = new Date(
        // now.getTime() - now.getTimezoneOffset * 60000).toISOString.slice(0, -1);

        // const formattedDate = date.toISOString();
        let localTime = now.toISOString()
        localTime = localTime
        console.log(now.toISOString())
        const [url, setUrl] = useState(""); 
        const [userCityInput, setUserCityInput] = useState("");
        const { error, isLoaded, items } = useFetch({
        url: `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m`,
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
            <input className="bg-gray-600 rounded-2xl" name="city" 
            onChange={(e) => setUserCityInput(e.target.value)} value={Date}></input>
            <ul>
                {items.map((item) => (
                    <li key={item.idDrink}>
                        {item.strDrink}
                        <img 
                            src={item.strDrinkThumb} 
                            alt={item.strDrink} 
                            width="50" 
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}