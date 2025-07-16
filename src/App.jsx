import { useEffect, useState } from 'react';
import { Weather } from './Components/UI/Weather';

function App() {
    const [latitude, setLatitude] = useState()
    const [longitude, setLongitude] = useState()
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                setLatitude(position.coords.latitude)
                setLongitude(position.coords.longitude)
            })
        }
    }, [])
    console.log(latitude);
    return (
        
        <div className='App'>
            navigat
            <Weather latitude={latitude} longitude={longitude} />
        </div>
    )
}

export default App;