import SearchBar from "./components/SearchBar"
import WeatherInfo from "./components/WeatherInfo"
import WeatherTab from "./components/WeatherTab"

function App() {

  return (
    <div className="h-screen w-screen bg-stone-950 text-white">

      <div className="w-11/12 mx-auto">
        <SearchBar/>
      </div>

      <div className="w-11/12 mx-auto mt-8">
        <WeatherTab/>
      </div>

      <div className="w-11/12 mx-auto mt-8">
        <WeatherInfo/>
      </div>
    </div>
  )
}

export default App
