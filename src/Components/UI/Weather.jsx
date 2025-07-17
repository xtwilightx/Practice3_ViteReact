import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";

export function Weather({ latitude, longitude }) {
    const [userCityInput, setUserCityInput] = useState("");
    const { error, isLoaded, items } = useFetch({
        url: `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m`,
    });

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!isLoaded) {
        return <div>Loading...</div>;
    }

    if (!items || !items.hourly) {
        return <div>Weather data not available</div>;
    }

    return (
        <div className="">
            <input 
                className="bg-gray-600 rounded-2xl" 
                name="city"
                value={userCityInput}
                onChange={(e) => setUserCityInput(e.target.value)} 
            />
            <ul>
                <li key={items.hourly.time[0]}>
                    Время: {items.hourly.time[0]}, 
                    Температура: {items.hourly.temperature_2m[0]}°C
                </li>
            </ul>
        </div>
    );
}