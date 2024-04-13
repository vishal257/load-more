'use client'

import { Suspense, useEffect, useState } from "react";
import Card from "./components/Card";
import getData from "./lib/data";


interface RData{
  title: string,
  description: string,
  image: string,
  link: string
}

function SuspenseHandler({children}:{children:React.ReactNode}){
  return(
    <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
  )
}

export default function Home() {

  const [count, setCount] = useState(0);
  const [data, setData] = useState<RData[]|null>(null);
  const [cardKey, setCardKey] = useState(0);

  useEffect(()=>{
    const fetchData = async () => {
      try{
        const response = await getData(count);
        setData(response);
        // console.log(response);
      }catch(e){
        console.log(e);
      }
    }
    fetchData();
  },[count]);

  const handleLoadMore = () =>{
    setCount((prev)=>prev+6);
    setCardKey(prevKey => prevKey + 1);
  }

  return (
    <SuspenseHandler>
    <div>
      {data && <Card key={cardKey} data={data}/>}
      <div className="text-center">
        <button className="rounded-full bg-black text-white py-4 px-10 hover:bg-slate-800" onClick={handleLoadMore}>Load More</button>
      </div>
    </div>
    </SuspenseHandler>
  );
}
