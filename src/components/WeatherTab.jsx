import ChangeOfRain from "./ChangeOfRain"
import SearchedCity from "./SearchedCity"
import WeatherCard from "./WeatherCard"
import WeatherMood from "./WeatherMood"


const WeatherTab = () => {
  return (
    <div>
        <h1 className="text-sm text-stone-400 font-semibold">Weather Information</h1>

        <div className="grid grid-cols-4 gap-4 mt-4 h-full">

            <div className="h-full">
                <WeatherCard/>
            </div>

            <div>
                <ChangeOfRain/>
            </div>

            <div className="">
                <SearchedCity/>
            </div>

            <div>
                <WeatherMood/>
            </div>
        </div>
    </div>
  )
}

export default WeatherTab
