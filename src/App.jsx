import { useEffect, useState } from 'react';
import { Weather } from './Components/UI/Weather';
import { Location } from './Components/UI/Location';
import { compile } from 'tailwindcss';
import { ParseCity } from './Components/Logic/ParseCity';


function App() {
    new Date();
    const [userCity, setUserCity] = useState([])
    const [saveCities, setSaveCities] = useState([])
    const [latitude, setLatitude] = useState()
    const [longitude, setLongitude] = useState()


    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLatitude(position.coords.latitude)
                    setLongitude(position.coords.longitude)
                },

                (error) => {
                    console.error("Ошибка получания геолокации", error.message);
                }
            )
        }
        else {
            console.error("Ваш браузер не поддерживает геолокацию")
        }

    }, [])
    return (

        <div className='App'>

            <span className='text-[aqua] text-3xl'>⛅<span className='text-white'>Погода</span>⛅</span>
            <div><Location userCity={userCity} setUserCity={setUserCity} latitude={latitude} longitude={longitude} /></div>
            <div><Weather latitude={latitude} longitude={longitude} key={`${latitude},${longitude}`} /></div>
            <div><ParseCity saveCities={saveCities} setSaveCities={setSaveCities} setLongitude={setLongitude} setLatitude={setLatitude} userCity={userCity} /></div>
            {saveCities.length > 0 && (
                <div className="saved-cities">
                    <h3>Сохраненные города:</h3>
                    <ul className="city-list">
                        {saveCities.map((city, index) => (
                            <li key={index} className="city-item">

                                <div className="city-buttons">
                                <button
                                        className="delete-btn text-red-500 text-5xl"
                                        onClick={() => setSaveCities(prev => prev.filter(c => c !== city))}
                                    >
                                        ×
                                    </button>
                                    <span className="city-name">{city}</span>
                                    <button
                                        className="activate-btn text-green-400 text-4xl"
                                        onClick={() => setUserCity(city)}
                                    >
                                        ✓
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>


    );
}

export default App;