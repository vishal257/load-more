'use client';

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBar(){

    const [value, setValue] = useState('');

    const router = useRouter();

    function handleClick(e:any){
        e.preventDefault();
        router.push(`/results?q=${value}`);
    }

    return(
        <div className="grid place-items-center h-dvh">
            <div className="lg:w-2/5 md:w-2/4 w-3/4 h-10 rounded-2xl md:text-xl sm:text-lg text-sm overflow-hidden bg-white relative">
                <form onSubmit={handleClick} className="w-full h-full">
                    <input type="text" className="w-4/5 h-full p-5 focus:outline-none" required value={value} onChange={(e:any) => setValue(e.target.value)}/>
                    <button type="submit" className="w-1/5 rounded-2xl bg-slate-300 h-full absolute text-white hover:bg-slate-400">Search</button>
                </form>
            </div>
        </div>
    )
}