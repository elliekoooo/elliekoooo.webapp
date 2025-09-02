import { Route, Routes } from 'react-router'
import './App.css'
import { Home } from './layout/Home'
import { About } from './layout/About'
import { SideBar } from './layout/Header'

function App() {

  return (
    <div className="">
      {/* <div className="fixed left-[50%] translate-x-[-50%]">
        <SideBar></SideBar>
      </div> */}
      <div>
        <Routes>
          <Route path='/' element={<Home/>} ></Route>
          <Route path='/about' element={<About/>} ></Route>
          <Route path='/projects' element={<Home/>} ></Route>
          <Route path='/contact' element={<Home/>} ></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
