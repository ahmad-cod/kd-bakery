import './App.css'
import Cards from './components/Cards'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>KD Bakery</h1>
      <Cards />
      <Outlet />
    </div>
  )
}

export default App
