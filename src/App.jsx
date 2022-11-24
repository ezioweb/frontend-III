import { A2aAula } from './aulas/A2aAula'
import { A3aAula } from './aulas/A3aAula'
import { A4aAula } from './aulas/A4aAula'
import { A5aAula } from './aulas/A5aAula'
import { A7aAula } from './aulas/A7aAula'
import { A8aAula } from './aulas/A8aAula'
import { A10aAula } from './aulas/A10aAula'
import { InstagramTimeLine } from './challenges/InstagramTimeLine'
import { Header } from './pages/Header'
import { VaporGames } from './pages/VaporGames'
import { PedidoPizza } from './aulas/A10aAula/PedidoPizza'
import { A14aAula } from './aulas/A14aAula'
import { A15aAula } from './aulas/A15aAula'

//importação da estrutura
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import { MainLayout } from './components/MainLayout'
import { ToDo } from './pages/ToDo'


function App() {
  const appRouter = createBrowserRouter([
    {
      path: 'to-do',
      element: <ToDo/>
    },
    {
      path: '', 
      element: <MainLayout />,
      children: [
        {
          path: '',
          element: <Header/> 
        }, 
        {
          path: 'home',
          element: <Header/> 
        }, 
        {
          path: 'segunda-aula',
          element: <A2aAula/>          
        },
        {
          path: 'terceira-aula',
          element: <A3aAula/>          
        },
        {
          path: 'quarta-aula',
          element: <A4aAula/>          
        },
        {
          path: 'quinta-aula',
          element: <A5aAula/>          
        },
        {
          path: 'setima-aula',
          element: <A7aAula/>          
        },       
        {
          path: 'oitava-aula',
          element: <A8aAula/>          
        },        
        {
          path: 'decima-aula',
          element: <A10aAula/>          
        },
        {
          path: 'decima-quarta-aula',
          element: <A14aAula/>          
        },
        {
          path: 'decima-quinta-aula',
          element: <A15aAula/>
        }
       
      ]
    }
    
  ])
  
  return (
    // <>
    // <Header />
    // <Login></Login>
    // <SegundaAula />
    //<A10aAula />
    //<InstagramTimeLine />
    // </> 
    
    // <VaporGames />
    
    <RouterProvider router={appRouter} /> 
  )
}

export default App
