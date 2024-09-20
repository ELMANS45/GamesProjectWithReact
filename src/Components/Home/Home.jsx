import React, { useContext, useEffect, useState } from 'react'
import { GamesContext } from '../../Contexts/GamesContext'
import GamesTable from '../GamesTable/GamesTable';
import Loading from '../Loading/Loading';

export default function Home() {
    let {home,homeGames} = useContext(GamesContext)
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        home()
        const timer =setTimeout(()=>{
          setLoading(false)
        },3000)
        return()=>clearTimeout(timer)
    },[])    
  return (
    <>
        {loading ? <Loading/> : <GamesTable games={homeGames}/>}
    </>
  )
}
