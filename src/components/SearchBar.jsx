import { useState } from "react"
import pinImage from "../assets/pin-outline.png"

const SearchBar = () => {

    const [searchCity, setSearchCity] = useState("")

  return (
    <div>
        <div className="flex justify-center items-center pt-10 w-full">

            <div className="flex items-center gap-4 w-[30%]">
                
                <img src={pinImage} alt="pin" className="w-6 h-6"/>
                <p>
                    {searchCity}
                </p>
            </div>

            <div className="flex items-center gap-4 w-[50%]">
                <input 
                    type="text"
                    placeholder="Enter a city"
                    className="w-full h-10 px-4 text-sm text-stone-200 bg-stone-900 rounded-lg outline-none focus:outline-none"
                    value={searchCity}
                    onChange={(e) => setSearchCity(e.target.value)}
                />
                <button 
                    className="bg-stone-900 text-white px-4 py-2 rounded-lg hover:bg-stone-950 transition-all duration-200"
                >
                    Search
                </button>
            </div>
        </div>
    </div>
  )
}

export default SearchBar
