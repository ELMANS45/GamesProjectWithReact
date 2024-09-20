import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import GamesTable from '../GamesTable/GamesTable';
import { GamesContext } from '../../Contexts/GamesContext';
import Loading from '../Loading/Loading';

export default function Categories() {
    let {category , categoryGames} = useContext(GamesContext)
    let {name} = useParams()
    const [loading , setLoading] = useState(true)
    useEffect(()=>{
        categoryGames(name)
        const timer =setTimeout(()=>{
          setLoading(false)
        },3000)
        return()=>clearTimeout(timer)
    },[name])
    console.log(category);
    
  return (
        <>
        {loading ? <Loading/> : <>        <div className='flex justify-center md:gap-x-7 md:flex-row flex-col gap-y-6 md:gap-y-0 text-center flex-wrap md:flex-none mt-6'>
        <Link to ="mmorpg"><h1 className='text-blue-600 uppercase'>mmorpg</h1></Link>
        <Link to ="shooter"><h1 className='text-blue-600 uppercase'>shooter</h1></Link>
        <Link to ="sailing"><h1 className='text-blue-600 uppercase'>sailing</h1></Link>
        <Link to ="permadeath"><h1 className='text-blue-600 uppercase'>permadeath</h1></Link>
        <Link to ="superhero"><h1 className='text-blue-600 uppercase'>superhero</h1></Link>
        <Link to ="pixel"><h1 className='text-blue-600 uppercase'>pixel</h1></Link>
        </div>
        <GamesTable games ={category}/></>}
        </>
  )
}
