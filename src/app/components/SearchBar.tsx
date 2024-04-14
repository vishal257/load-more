export default function SearchBar(){

    function handleClick(){
        
    }

    return(
        <div className="grid place-items-center h-dvh">
            <div className="lg:w-2/5 md:w-2/4 w-3/4 h-10 rounded-2xl md:text-xl sm:text-lg text-sm overflow-hidden bg-white relative">
                <input type="text" className="w-4/5 h-full p-5 focus:outline-none" />
                <button type="submit" onClick={handleClick} className="w-1/5 rounded-2xl bg-slate-300 h-full absolute text-white hover:bg-slate-400">Search</button>
            </div>
        </div>
    )
}