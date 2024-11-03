import chanceOfRainImage from "../assets/Chance og rain graph.png"

const ChangeOfRain = () => {
  return (
    <div>
        <div className="flex flex-col items-center justify-center gap-8 p-8 rounded-lg bg-stone-900 w-full text-white  shadow-lg backdrop-blur-3xl">
            <div>
                <div className="flex flex-col gap-6 justify-between items-center w-full">
                    <div>
                        <img src={chanceOfRainImage} alt="chance of rain" className="w-52 h-auto"/>
                    </div>

                    <div className="text-xl text-stone-200 font-semibold">
                        Chance of Rain: 50%
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ChangeOfRain
