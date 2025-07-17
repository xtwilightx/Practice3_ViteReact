import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";


export function Weather({ latitude, longitude, userCity }) {
    const [userCityInput, setUserCityInput] = useState("");
    const { error, isLoaded, items } = useFetch({
        url: `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=sunset&hourly=temperature_2m&current=relative_humidity_2m,apparent_temperature`,
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
            <ul>
                <li className="flex flex-col" key={items.hourly.time[0]}>
                    {/* Время: {items.hourly.time[0]}, */}
                    <span>Температура: {items.hourly.temperature_2m[0]}°C</span>
                    <div className="group">
                        <button className="px-2 py-1 rounded">Доп информация:</button>
                        <div className="hidden group-hover:block">
                            <div>Время заката: {(items.daily.sunset[0]).slice(-5)}</div>
                            <div>Влажность: {items.current.relative_humidity_2m}</div>
                            <div>Температура, которая ощущается: {items.current.apparent_temperature}</div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
}