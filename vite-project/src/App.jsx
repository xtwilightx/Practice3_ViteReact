import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './Components/Welcome'
import { useEffect } from 'react'

// function Profile() {
//   return(
//     <div className='size-24 bg-amber-500'></div>
//   );
// }
const [error, setError] = useState(null);
const [Loaded, setIsLoaded] = useState(false);
const [items, setItems] = useState([]);

function App() {

      fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail")
      .then(res => res.json())
  return (
    <div>


    </div>
  );
}

export default App