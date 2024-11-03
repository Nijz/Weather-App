

const SearchedCity = () => {
  return (
    <div>
        <div className="flex flex-col items-center justify-center gap-8 p-8 rounded-lg bg-stone-900 w-full text-white  shadow-lg backdrop-blur-3xl h-full">
            <div className="flex gap-4 justify-between items-center w-full">
                <div className="flex flex-col gap-4 justify-between items-center w-full">
                    <div>
                        <p className="font-semibold text-3xl">London</p>
                    </div>
                    <div>
                        <p className="font-semibold text-sm">12:00 PM</p>
                    </div>
                </div>

                <div className="flex flex-col gap-2 justify-center items-center w-full">
                    <div className="flex flex-col gap-4 justify-center items-center">
                        <div>
                            <p>Sunrise: 6:00 AM</p>
                        </div>
                        <div>
                            <p>Sunset: 6:00 PM</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchedCity
