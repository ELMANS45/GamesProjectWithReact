import './App.css'  
import GamesContextProvider from './Contexts/GamesContext';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import LayOut from './Components/LayOut/LayOut';
import Home from './Components/Home/Home';
import Platforms from './Components/Platforms/Platforms';
import Categories from './Components/Categories/Categories';
import GameDetails from './Components/GameDetails/GameDetails';

function App() {
    const router = createHashRouter([
      {path : '' , element : <LayOut/>, children :[
        {index : true , element :<Home/>},
        {path : 'platforms' , element : <Platforms/>, children :[
          {path : ':name'}
        ]},
        {path : 'categories' , element : <Categories/>, children :[
          {path : ':name'}
        ]},
        {path :'gamedetails/:id', element:<GameDetails/>}
    ]}
    ])
  return (
    <GamesContextProvider>
      <RouterProvider router={router}>

      </RouterProvider>
    </GamesContextProvider>
  )
}

export default App
