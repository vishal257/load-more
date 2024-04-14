'use client'

import { Suspense, useEffect, useRef, useState } from "react";
import Card from "../components/Card";
import getData from "../lib/data";
import { useSearchParams } from "next/navigation";


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
  const [data, setData] = useState<RData[]>([]);
  const initialRender = useRef(true);
  const params = useSearchParams();

  useEffect(()=>{
    const fetchData = async (query:string) => {
      try{
        const response = await getData(count, query);
        setData(prev => [...prev, ...response]);
      }catch(e){
        console.log(e);
      }
    }
    if (!initialRender.current) {
      const query:string = params.get('q')|| 'quilting';
      fetchData(query);
    } else {
      initialRender.current = false;
    }

  },[count]);

  const handleLoadMore = () =>{
    setCount((prev)=>prev+6);
  }

  return (
    <SuspenseHandler>
      
    <div className="pb-10">
      <Card data={data}/>
      <div className="text-center">
        <button className="rounded-full bg-black text-white py-4 px-10 hover:bg-slate-800" onClick={handleLoadMore}>Load More</button>
      </div>
    </div>
    </SuspenseHandler>
  );
}
