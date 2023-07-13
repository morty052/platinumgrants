import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes, Outlet } from 'react-router-dom'
import './App.css'
import { 
Home,
ApplicationPage,
ApplicationComplete, 
AboutUs,
Login,
ApplicationStatus
 } from './pages'

import { Layout } from './components'


function App() {
  const [count, setCount] = useState(0)

  const PublicRoutes = ({children}) => {
   return(
    <Layout>
      <Outlet/>
    </Layout>
   )
  }

  return (
    <>
 <Routes>
   <Route element={<PublicRoutes/>}>
   <Route path='/'element={<Home/>}/>
   <Route path='/application'element={<ApplicationPage/>}/>
   <Route path='/aboutus'element={<AboutUs/>}/>
   </Route>
   <Route path='/applicant/:id'element={<ApplicationComplete/>}/>
   <Route path='/applicationstatus/:id'element={<ApplicationStatus/>}/>
   <Route path='/login'element={<Login/>}/>
 </Routes>
    </>
  )
}

export default App
