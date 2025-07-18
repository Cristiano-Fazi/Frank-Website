import './App.css'
import { Routes, Route } from 'react-router-dom'
import Submission from './pages/submission/submission'
import Footer from './components/Footer/Footer.jsx' 
import Navbar from './components/Navbar/Navbar.jsx'

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <main className="appContent">
        <Routes>
          <Route path="/services" element={<Submission />}/>
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
