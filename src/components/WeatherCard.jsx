import sunWindImage from "../assets/Sunnny Windy Icon 1.png"

const WeatherCard = () => {
  return (
    <div>
        <div className="flex flex-col items-center justify-center gap-8 p-8 rounded-lg bg-stone-900 w-full text-white  shadow-lg backdrop-blur-3xl">
            <div className="flex gap-4 justify-between items-center w-full">
                <div>
                    <p className="font-semibold">Monday</p>
                </div>
                <div>
                    <p className="font-semibold">12:00 PM</p>
                </div>
            </div>

            <div className="flex flex-col gap-4 justify-center items-center w-full">
                <div>
                    <img src={sunWindImage} alt="sun wind" className="w-26 h-24"/>
                </div>
                <div>
                    <p className="font-semibold text-4xl">
                        25°C
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WeatherCard
