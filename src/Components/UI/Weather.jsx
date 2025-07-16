import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";


export function Weather({latitude, longitude}) {
        const [url, setUrl] = useState(""); 
        const { error, isLoaded, items } = useFetch({
        url: `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m`,
        dataKey: "drinks"
    
    });

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!isLoaded) {
        return <div>Loading...</div>;
    }

    return (
        <div className="size-6">
            <input className="bg-white" name="city" value="Moscow"></input>
            <h1>Non-Alcoholic Cocktails</h1>
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