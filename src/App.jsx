import { useEffect, useState } from 'react';
import { Weather } from './Components/UI/Weather';
import { Location } from './Components/UI/Location';
import { compile } from 'tailwindcss';

function App() {
    new Date();
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
        <div>navigat</div>
        <div><Location latitude={latitude} longitude={longitude}/></div>
        <div>Погода в вашем городе:</div>
    </div>
    )
}

export default App;