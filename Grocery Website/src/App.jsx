
import './App.css'
import Banner from './components/Banner'
import Experts from './components/Experts'
import Footer from './components/Footer'
import Header from './components/Header'
import Newsletter from './components/Newsletter'
import Plans from './components/Plans'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
 

  return (
    <>
    <BrowserRouter>
    <Header /> 
    <Routes>
    <Route path='/' element={<Banner />}/>
    <Route path='/newsletter' element={ <Newsletter /> }/>
    <Route path='/plans' element={<Plans />}/>
    <Route path='/footer' element={<Footer /> }/>

    </Routes>
    </BrowserRouter>
    
    
    
     
     
     
    </>

  )
}

export default App
