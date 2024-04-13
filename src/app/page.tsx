import Card from "./components/Card";

export default function Home() {

  function fetchData(){
    
  }

  return (
    <div>
      <Card/>
      <div className="text-center">
        <button className="rounded-full bg-black text-white py-4 px-10 hover:bg-slate-800" onClick={fetchData}>Load More</button>
      </div>
    </div>
    
  );
}
