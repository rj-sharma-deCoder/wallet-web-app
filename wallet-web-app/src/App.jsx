import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

//Import Components
import Navbar from './components/home/Navbar'
import BalanceCard from './components/home/BalanceCard'
import Dashboard from './components/home/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Wallet</h1>
    </div>
  )
}

export default App
