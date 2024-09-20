import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { GamesContext } from '../../Contexts/GamesContext';
import Slider from "react-slick";
import Loading from '../Loading/Loading';
export default function GameDetails() {
  const [loading, setLoading] = useState(true)
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
    let{gameDetails,gamesDetails} = useContext(GamesContext)
    let{id} = useParams()
    useEffect(()=>{
      gameDetails(id)
      const timer =setTimeout(()=>{
        setLoading(false)
      },3000)
      return()=>clearTimeout(timer)
    },[])
    console.log(gamesDetails);
    
  return (
    <>
        {loading ? <Loading/> :       <div id={gamesDetails?.id} className="md:w-3/4 w-full mx-auto mt-7 border border-transparent shadow-2xl p-8">
      <div className="flex justify-center mb-7">
          <img src={gamesDetails?.thumbnail} className='md:w-1/3' alt="" />
        </div>
        <div className="w-full flex flex-col justify-center mt-6">
          <div className="flex md:flex-row flex-col gap-y-6 md:gap-y-0 justify-between">
          <h1 className='text-slate-900'>Publisher:  <span className='border bg-gray-600 p-1 border-transparent shadow-lg rounded-sm'>{gamesDetails?.publisher}</span></h1>
          <h1 className='text-slate-900'>Platform:  <span className='border bg-gray-600 p-1 border-transparent shadow-lg rounded-sm'>{gamesDetails?.platform}</span></h1>
          <h1 className='text-slate-900'>Category:  <span className='border bg-gray-600 p-1 border-transparent shadow-lg rounded-sm'>{gamesDetails?.genre}</span></h1>
          <h1 className='text-slate-900'>Release Date:  <span className='border bg-gray-600 p-1 border-transparent shadow-lg rounded-sm'>{gamesDetails?.release_date}</span></h1>
          
          </div>
          <p className='text-white mt-4 mb-4'>{gamesDetails?.description}</p>
          <Slider {...settings}>
          {gamesDetails?.screenshots.map((screenshot)=><div key={screenshot.id}><img src={screenshot.image} alt="" /></div>)}
    </Slider>
          <div className="flex justify-center">
          <button onClick={()=>{window.location=gamesDetails?.game_url}} className='mt-5 bg-blue-500 w-1/4 flex justify-center border border-transparent shadow-2xl rounded-md'>Game Location</button>
          </div>
        </div>

      </div>}
    </>
  )
}
