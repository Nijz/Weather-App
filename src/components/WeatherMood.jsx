

const WeatherMood = () => {
  return (
    <div>
        <div className="flex flex-col items-center justify-center gap-8 p-8 rounded-lg bg-stone-900 w-full text-white  shadow-lg backdrop-blur-3xl">
            <div>
                <p className="text-2xl font-semibold text-stone-400">Weather Based Mood </p>
            </div>

            <div>
                {
                    <div className="flex flex-col gap-5 justify-center items-center w-full">
                        <p className="text-2xl font-semibold text-stone-200">
                            Happy
                        </p>

                        <span className="text-6xl ">
                            🥳
                        </span>
                    </div>
                }
            </div>
        </div>
    </div>
  )
}

export default WeatherMood
