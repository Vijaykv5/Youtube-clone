import { useState } from 'react'
import "./App.css"
import Head from './components/Head'
import Body from './components/Body'
import { Provider } from 'react-redux'
import store from './utils/store'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import WatchPage from './components/WatchPage'
import MainContainer from './components/MainContainer'

const  appRouter =createBrowserRouter([{
  path:"/",
  element:<Body/>,
  children:[
    {
      path:'/',
      element:<MainContainer/>
    },
    {
      path:'/watch',
      element:<WatchPage/>
    }
  ]
  
}])
function App() {

  return (
    
      <Provider store={store}>
        <>
      <Head/>
      
      <RouterProvider router={appRouter}/>
      </>
      </Provider>
      
      
     
    
  )
}

export default App
