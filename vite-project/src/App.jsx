import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './Components/Welcome'
import { useEffect } from 'react'


function App() {
const [error, setError] = useState(null);
const [isLoaded, setIsLoaded] = useState(false);
const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.drinks);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

    if (error) {
      return <p>Error {error.message}</p>
    }
    else if(!isLoaded){
      return <p> Loading... </p>
    }
    else{
      return (
        <ul>
          {items.map(item => (
            <li key = {item.name}>{item.strDrink}</li>  
          ))}
        </ul>
      )
    }

  return (
    <div>


    </div>
  );
}

export default App