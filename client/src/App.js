import React, { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'




const Layout  = lazy(()=>import('./Layout'))
const Regester  = lazy(()=>import('./components/Auth/Regester'))
const Login  = lazy(()=>import('./components/Auth/Login'))


const App = () => {
  return (
    <Suspense fallback={<h1>loading</h1>}>
      <Routes>
         <Route path="/" element={<Layout/>}>
            <Route index element={<h1>this is a home page</h1>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='regester' element={<Regester/>}/>
         </Route>
      </Routes>
    </Suspense>
  )
}

export default App
