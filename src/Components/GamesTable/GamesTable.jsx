import React from 'react'
import { Link } from 'react-router-dom';

export default function GamesTable({games}) {
    
  return (
    <>
    <div className=' mt-7 flex justify-center flex-wrap gap-7' style={{ filter: 'grayscale(0.5)' }}>
        {games?.map((game)=><div  key={game.id} className=' text-gray-500 border border-transparent shadow-2xl w-full md:w-1/5'>
               <Link to={`/gamedetails/${game.id}`}> <div className='flex flex-col gap-y-6 p-3'>
                    <img src={game.thumbnail} alt="" />
                    <div className='flex justify-between'>
                        <h1 className='bg-gray-400 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded'>{game.title}</h1>
                        <h1 className='bg-gray-400 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded'>{game.platform.split('').slice(0,2).join('')=='PC' ? game.platform.split('').slice(0,2).join('') : game.platform}</h1>
                    </div>
                    <div className='text-gray-500'>
                        <p>{game.short_description.split('').slice(0,20).join('')+'...'}</p>
                    </div>
                    <div className="text-sm flex justify-between">
                    <h1 className='bg-gray-400 text-gray-800 text-xs font-medium me-2 px-1 py-0.5 rounded'>{game.publisher}</h1>
                    </div>
                </div></Link>
        </div>)}
    </div>
    </>
  )
}
