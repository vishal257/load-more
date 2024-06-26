'use client'

import { Suspense, useEffect, useRef, useState } from "react";
import Card from "../components/Card";
import getData from "../lib/data";
import { useSearchParams, useRouter } from "next/navigation";
import { renderToStaticMarkup } from "react-dom/server";


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

function HomeHandler() {

  const [count, setCount] = useState(0);
  const [data, setData] = useState<RData[]>([]);
  const initialRender = useRef(true);
  const params = useSearchParams();
  const [query, setQuery] = useState('');
  const router = useRouter();
  const maxCount = 12;


  useEffect(()=>{
    const fetchData = async (query:string) => {
      try{
        const response = await getData(count, query, maxCount);
        setData(prev => [...prev, ...response]);
      }catch(e){
        console.log(e);
      }
    }
    const query:string = params.get('q')|| 'quilting';
    setQuery(query);
    fetchData(query);
    // if (!initialRender.current) {
    //   const query:string = params.get('q')|| 'quilting';
    //   setQuery(query);
    //   fetchData(query);
    // } else {
    //   initialRender.current = false;
    // }

  },[count]);

  const handleLoadMore = () =>{
    setCount((prev)=>prev+maxCount);
  }
  const handleGoback = () =>{
    router.back();
  }

  return (
    <>
      <div className="w-full text-center py-5 mt-5 text-2xl font-bold text-slate-600 grid grid-cols-1">
        <div className="ms-14 absolute md:block hidden cursor-pointer" onClick={handleGoback}>&lt;&lt; <span className="underline">Go Back</span></div>
        <div className="justify-self-center">Showing Results For: {query}</div> 
        <div className="me-14 absolute md:block hidden justify-self-end">Current Results:{count+12}</div>
      </div>
    <div className="pb-10">
      <Card data={data}/>
      <div className="text-center">
        <button className="rounded-full bg-black text-white py-4 px-10 hover:bg-slate-800" onClick={handleLoadMore}>Load More</button>
      </div>
    </div>
    </>
  );
}

export default function Home(){
  return(
    <SuspenseHandler>
      <HomeHandler/>
    </SuspenseHandler>
  )
}
