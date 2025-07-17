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
    console.log(latitude);
    console.log(longitude);
    return (

        <div className='App'>
            <div>Погода:</div>
            <div><Location userCity={userCity} setUserCity={setUserCity} latitude={latitude} longitude={longitude} /></div>
            <div><Weather latitude={latitude} longitude={longitude} /></div>
            <div><ParseCity saveCities={saveCities} setSaveCities={setSaveCities} setLongitude={setLongitude} setLatitude={setLatitude} /></div>
            {saveCities.length > 0 && (
                <div className="saved-cities">
                    <h3>Сохраненные города:</h3>
                    <ul className="city-list">
                        {saveCities.map((city, index) => (
                            <li key={index} className="city-item">
                                <span className="city-name">{city}</span>
                                <div className="city-buttons">
                                    <button
                                        className="activate-btn"
                                        onClick={() => setSaveCities(city)}
                                    >
                                        ✓
                                    </button>
                                    <button
                                        className="delete-btn"
                                        onClick={() => setSaveCities(prev => prev.filter(c => c !== city))}
                                    >
                                        ×
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