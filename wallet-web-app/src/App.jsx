import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

//Import Components
import Home from './components/pages/home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Home />
      <h1>Wallet</h1>
    </div>
  )
}

export default App
