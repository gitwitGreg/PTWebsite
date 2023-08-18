import './App.css'
import Navbar from './componments/Navbar'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../src/Pages/Home'
import Footer from '../src/componments/Footer'
import About from '../src/Pages/About'
import Services from './Pages/Services'
import Contact from './Pages/Contact'






function App() {
  return (
   <BrowserRouter className='App'>
    < Navbar />
    <Routes>
      <Route path='/Home' element={<Home />} />
      <Route path='/About' element={<About />} />
      <Route path='/Services' element={<Services />} />
      <Route path='/Contact' element={<Contact />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App
