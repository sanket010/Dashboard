
import './App.css'
import Dashboard from "../src/pages/Dashboard/dashboard"
import Navbar from './components/Navbar/Navbar'
import SideNav from './components/SideNav/SideNav'
import Footer from './components/Footer/Footer'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Headline from "../src/pages/Headline/headline"


function App() {
  

  return (
   
    <Router>
    <div className="flex justify-start flex-row ml-0">
      <SideNav />
      <div className="flex flex-col  w-full">
        <Navbar />
        
          <div>
          <Routes>
            <Route path= '/' element={<Dashboard/>}/>
            <Route path='/headline' element={<Headline/>}/>
         
        </Routes>
        </div>

        <Footer />
         
          
        
      </div>
    </div>
    </Router>
   
  )
}

export default App
