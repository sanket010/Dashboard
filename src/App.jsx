import { useState } from 'react'
import './App.css'
import Dashboard from "./components/Dashboard/dashboard"
import Navbar from './components/Navbar/Navbar'
import SideNav from './components/SideNav/SideNav'
import Footer from './components/Footer/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
   
    
    <div className="flex justify-start flex-row ml-0">
      <SideNav />
      <div className="flex flex-col  w-full">
        <Navbar />
        <div><Dashboard/>
        </div>
        <div className=''><Footer /></div>
        
      </div>
    </div>
   
  )
}

export default App
