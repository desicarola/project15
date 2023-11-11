import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Journal from './pages/Journal'
import Contact from './pages/Contact'
import Header from './Header'
import Footer from './Footer'

function App() {
  return (
    
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
				<Route path="/journal" element={<Journal />} />
				
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
export default App