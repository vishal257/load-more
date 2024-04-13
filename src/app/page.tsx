'use client'

import Card from "./components/Card";
import getData from "./lib/data";

export default function Home() {

  return (
    <div>
      <Card/>
      <div className="text-center">
        <button className="rounded-full bg-black text-white py-4 px-10 hover:bg-slate-800" onClick={getData}>Load More</button>
      </div>
    </div>
    
  );
}
