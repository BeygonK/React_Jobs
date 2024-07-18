import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HomeCards from './components/HomeCards'
import Jobs from './components/Jobs'
import ViewAllJobs from './components/ViewAllJobs'
const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <HomeCards/>
    <Jobs/>
    <ViewAllJobs/>
    </>
  )
}

export default App