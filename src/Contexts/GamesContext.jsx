import axios from 'axios';
import { createContext, useState } from 'react'
export const GamesContext = createContext()
export default function GamesContextProvider(e) {
  const [homeGames, setHomeGames] = useState(null)
  const [platform,setPlatform] = useState(null)
  const [gamesDetails,setGamesDetails] = useState(null)
  const [category,setCategory] = useState(null)
  const [loading, setLoading] = useState(null)

  let  headers =  {
    'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
    'x-rapidapi-key': '82fb5b174fmsh55a772a64c0e58ap1a61b2jsn9e1dacb5ecb0'
  }
  async function home() {
    try{
      setLoading(true)
      let{data} = await axios.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=shooter&sort-by=release-date`,{
        headers
      })
      setHomeGames(data?.slice(0,50))
    }
    catch(error){
      console.log(error);
      
    }
    setLoading(false)
}
  async function platformGames(name) {
        try{
          setLoading(true)
          let {data} = await axios.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?platform=${name||'pc'}`,{
            headers
          })
          setPlatform(data)
        }
        catch(error){
          console.log(error);
          
        }
        setLoading(false)
  }
  async function categoryGames(name) {
    try{
      setLoading(true)
      let {data} = await axios.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${name||'mmorpg'}`,{
        headers
      })
      setCategory(data)
    }
    catch(error){
      console.log(error);
    }
    setLoading(false)
}
async function gameDetails(id) {
    try{
      let {data}= await axios.get(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,{
        headers
      })
      setGamesDetails(data)
    }
    catch(error){
      console.log(error);
    }
}
  return (
    <GamesContext.Provider value={{home,homeGames,platformGames,platform,category ,categoryGames,loading,gameDetails , gamesDetails}}>
        {e.children}
    </GamesContext.Provider>
  )
}
