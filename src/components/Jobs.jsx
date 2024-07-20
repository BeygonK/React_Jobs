import React from 'react'
import jobs from '../Jobs.json'
import Job from './Job'
import { useState, useEffect } from 'react'
const Jobs = ({isHome=false}) => {
    /*<!--console.log(jobs)--!>*/
    const [jobs, setJobs] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      const fetchJobs = async () => {
        const res = await fetch('http;://localhost:5000/jobs');
        const data = res.json();
        setJobs(data);
        setLoading(false);
      }
      fetchJobs()
    }, [])
  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-black mb-6 text-center">
          { isHome ? 'Featured Jobs': 'All Jobs'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.map((job) => (
                <Job key={job.id} job={job}/>
            )) }
        </div>
      </div>
    </section>

  )
}

export default Jobs