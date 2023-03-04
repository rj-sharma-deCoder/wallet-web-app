import React from 'react'

//Import Homepage Components
import Navigbar from './Navigbar'
import BalanceCard from './BalanceCard'
import Dashboard from './Dashboard'

const Home = () => {
  return (
    <div>
        <Navigbar />
        <BalanceCard />
        <Dashboard />
    </div>
  )
}

export default Home