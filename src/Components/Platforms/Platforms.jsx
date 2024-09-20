import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { GamesContext } from '../../Contexts/GamesContext';
import GamesTable from '../GamesTable/GamesTable';
import Loading from '../Loading/Loading';

export default function Platforms() {
    let {platform , platformGames} = useContext(GamesContext)
    let {name} = useParams()
    const [loading , setLoading] = useState(true)
    useEffect(()=>{
        platformGames(name)
        const timer =setTimeout(()=>{
          setLoading(false)
        },3000)
        return()=>clearTimeout(timer)
    },[name])
    
  return (
        <>
            {loading ? <Loading/> : <>        <div className='flex justify-center gap-x-7 mt-6'>
        <Link to ="pc"><h1 className='text-blue-600'>PC</h1></Link>
        <Link to ="browser"><h1 className='text-blue-600'>WEB BROWSER</h1></Link>
        </div>
        <GamesTable games ={platform}/></>}
        </>
  )
}
