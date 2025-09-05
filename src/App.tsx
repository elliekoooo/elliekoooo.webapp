import { Route, Routes } from 'react-router'
import './App.css'
import { Home } from './layout/Home'
import { About } from './layout/About'
import { Projects } from './layout/Projects'
import { Contact } from './layout/Contact'
import { Header } from './layout/Header'
import { MenuBar } from './layout/MenuBar'

function App() {

  return (
    <div className="">
      <MenuBar></MenuBar>
      <Header></Header>
      <div>
        <Routes>
          <Route path='/' element={<Home/>} ></Route>
          <Route path='about' element={<About/>} ></Route>
          <Route path='projects' element={<Projects/>} ></Route>
          <Route path='contact' element={<Contact/>} ></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
