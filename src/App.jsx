import React,{lazy,Suspense} from 'react'
import Home from "./pages/Home"
import About from "./pages/About"
import Navbar from "./components/Navbar"
import { Route,Routes } from 'react-router-dom'
import "../src/App.css"

const Icecream=lazy(()=>import('./pages/Icecream'));
const Service = lazy(() => import('./pages/Service'));
const Blog = lazy(() => import('./pages/Blog'));

function App() {

  return (
      <div className='app'style={{height:"100vh",width:"100vw"}}>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>  
          <Route path="/icecream" element={<Suspense fallback={<div className='lazyLoading'>Loading IceCream .....</div>}>
                                          <Icecream/></Suspense>}/>
          <Route path="/blog" element={<Suspense fallback={<div className='lazyLoading'>Loading Blog page.....</div>}>
                                      <Blog/></Suspense>}/>
          <Route path="/service" element={<Suspense fallback={<div className='lazyLoading'>Loading Service site.....</div>}>
                                      <Service/></Suspense>}/>
        </Routes>
      </div>
      
  )
}

export default App
