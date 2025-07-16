import { useFetch } from './hooks/useFetch';

function App() {
    const { error, isLoaded, items } = useFetch(
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic"
    );

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!isLoaded) {
        return <div>Loading...</div>;
    }

    return (
        <div className="size-6">
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

export default App;