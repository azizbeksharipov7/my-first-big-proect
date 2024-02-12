import HeaderNav from "~/components/header/header-nav"
import { useState } from 'react'
import './App.css'
import { Icons } from "~/assets/icons";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home, Info, Products } from "./pages";
//path alas
function App() {
const routes=createBrowserRouter([

  {
    path:"/",
    element:<Home/>,
  },
  {
    path:"/products",
    element:<Products/>,
  },
  {
    path:"/info",
    element:<Info/>,
  }
])
  return <RouterProvider router={routes}/>;       



}

export default App
