import { Route, Routes } from 'react-router'
import './App.css'
import { Home } from './layout/Home'
import { About } from './layout/About'
import { Projects } from './layout/Projects'
import { Contact } from './layout/Contact'
import { Header } from './layout/Header'
import { MenuBar } from './layout/MenuBar'
import { Footer } from './layout/Footer'
import { AnimatePresence } from 'motion/react'
import { useLocation } from 'react-router-dom'

function App() {
  const location = useLocation();

  return (
      <div className="flex flex-col lg:w-[50vw] sm:w-[70vw] m-auto">
        <MenuBar></MenuBar>
        <Header></Header>
        <AnimatePresence mode="wait" initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route path='' element={<Home/>} ></Route>
            <Route path='home' element={<Home/>} ></Route>
            <Route path='about' element={<About/>} ></Route>
            <Route path='projects' element={<Projects/>} ></Route>
            <Route path='contact' element={<Contact/>} ></Route>
          </Routes>
        </AnimatePresence> 
        <Footer></Footer>
      </div>
  )
}

export default App
