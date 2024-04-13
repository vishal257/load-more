'use client'

export default function Card({data}:{data:any}){
  {console.log(data)}
    return(
        <div className="container mx-auto">
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-4 py-10 lg:px-12 md:px-8 px-4">
        {
          data.map((item:any, index:number) => (
            <div className="h-full" key={index}>
            <div className="self-center mx-auto rounded-2xl bg-white">
              <div className="text-center text-xl font-bold py-2">{item.title}</div>
              <div><a href={item.link} target="_blank"><img className="mx-auto py-2" src={item.image} alt="" /></a></div>
              <div className="text-center py-2 border-t-4  text-wrap px-4">{item.description}</div>
            </div>
          </div>
          ))
        }
        
      </div>
    </div>
    );
}