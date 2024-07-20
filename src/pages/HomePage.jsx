import React from 'react'
import Hero from '../components/Hero'
import HomeCards from '../components/HomeCards'
import ViewAllJobs from '../components/ViewAllJobs'
import Jobs from '../components/Jobs'
const HomePage = () => {
  return (
    <>
        <Hero/>
        <HomeCards/>
        <Jobs isHome={true}/>
        <ViewAllJobs/>
    </>
  )
}

export default HomePage