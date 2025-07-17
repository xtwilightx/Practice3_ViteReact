import { useState, useEffect } from 'react';
import { useFetch } from '../../hooks/useFetch';

export function ParseCity({ saveCities, setSaveCities, setLatitude, setLongitude, userCity }) {
    const [userCityInput, setUserCityInput] = useState("");
    const [isButtonClicked, setIsButtonClicked] = useState();
    const [cityName, setCityName] = useState();

    const handleClick = () => {
        fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${userCityInput}&appid=88bfcd2806bae8b88b443677fa94eb90`).then((res) =>

            res.json()).then(data => {
                setLatitude(data[0].lat)
                setLongitude(data[0].lon)
            })
        setCityName(userCityInput);
        setSaveCities(prev => {
            const city = userCityInput.trim();
            if (!city || prev.includes(city)) return prev;
            return [...prev, city];
        })
    }


    return (
        <div className='flex flex-col w-80'>
            <input
                className="bg-gray-600 rounded-2xl border-2 text-center"
                name="city"
                value={userCityInput}
                onChange={(e) => setUserCityInput(e.target.value)}
            />
            <button className='text-green-200' onClick={handleClick}><u>Сохранить город</u></button>
        </div>
    )
}