import './App.css'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer/Footer' 
import Navbar from './components/NavBar/NavBar'
import Submission from './pages/submission/Submission'

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
