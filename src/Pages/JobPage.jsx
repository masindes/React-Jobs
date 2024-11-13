import React from 'react'


import { useState, useEffect } from 'react'
import { useParams } from'react-router-dom';
import Spinner from '../Components/spinner';
const JobPage = () => {

    const { id} = useParams();
    const [job, setJob] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJob = async () => {
            try {
                const response = await fetch(`http://localhost:5000/jobs/${id}`);
                if (!response.ok) {
                  throw new Error(`Error fetching data: ${response.statusText}`);
                }
                const data = await response.json();
                setJob(data);
              } catch (error) {
                console.error('Error fetching jobs:', error);
              } finally {
                setLoading(false);
            }
    
        }
        fetchJob();
    },[])

  return (
    loading ? <Spinner /> : (
        <h1>{job.title}</h1>
    )
  )
}



export default JobPage