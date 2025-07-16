import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './Components/Welcome'
import { useEffect } from 'react'
import { useFetch } from './hooks/useFetch'


function App() {
  <useFetch url={"http://api.openweathermap.org/geo/1.0/reverse?lat=56&lon=56&limit=10&appid=88bfcd2806bae8b88b443677fa94eb90"} />
}

export default App