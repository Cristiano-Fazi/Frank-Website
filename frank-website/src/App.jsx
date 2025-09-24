import './App.css'
import { Routes, Route } from 'react-router-dom'
import Submission from './pages/submission/submission'
import About from './pages/about/aboutUs.jsx'
import Footer from './components/Footer/Footer.jsx' 
import Navbar from './components/Navbar/Navbar.jsx'

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <main className="appContent">
        <Routes>
          <Route path="/" element={<About/>}/>
          <Route path="/submission" element={<Submission />}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </main>
      <Footer/>
    </div>
  )
}

export default App
