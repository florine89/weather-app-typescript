// My main container

import { useState, ChangeEvent } from "react";

const App = (): JSX.Element => {

  //variable pour recherche la localisation dans forecast weather
  const [term, setTerm] = useState<string>('')

  const getSearchoptions = (value: string) => {
   // je fais appel à mon api sur OpenWeather
   fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${value.trim()}&limit=5&appid=${process.env.REACT_APP_API_KEY}`)
  }
  //http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}
  

  // je définis le type que je veux en changeant mon usestate avec nouvelle valeur (setTerm)
  const InputChange = (e: ChangeEvent<HTMLInputElement>) => {

    const value = e.target.value.trim()
    setTerm(value)

    if (value === '' ) return

    getSearchoptions(value)
  }

  return (
    <main className="flex justify-center items-center bg-gradient-to-br from-green-400 via-rose-400
     to-yellow-300 h-[100vh] w-full">
      <section className=" w-full md:max-w-[500px] p-4 flex flex-col text-center
      items-center justify-center md:px-10 lg:p-24 h-full lg:h-[500px]
      bg-white bg-opacity-25 backdrop-blur-lg drop-shadow-lg shadow-2xl rounded text-gray-900">
        <h1 className="text-4xl ">Weather Forecast</h1>
        <p className="text-sm mt-2">
          Enter below a place you want to know the weather of and select an option from dropdown
        </p>
        <div className="flex mt-10 md:mt-4">
          <input type="text" value={term}
            onChange={InputChange}
            className=" border-2 rounded-l-md mt-3 border-white" />
          <button className="rounder-r-md border-2 border-white cursor-pointer
         hover:border-gray-700 text-gray-900 py-1 px-4 mt-3">
            Search
          </button>
        </div>
      </section>

    </main>
  )
}

export default App;
